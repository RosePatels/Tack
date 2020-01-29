class Api::ChannelsController < ApplicationController

    def index
        @channels = Channel.all
        render "api/channels/index"
    end

    def create
            @user = current_user
            @channel = Channel.new(channel_params)    
         ActiveRecord::Base.transaction do
            @channel.save!
            @channel_membership = @channel.channel_memberships.new({user_id: current_user.id })
            @channel_membership.save!
            return render "api/channels/show"
         end

         render json: ["didn't work :("], status: 422

        # if @channel.save && @channel_membership.save
        #     render "api/channels/show"
        # else
        #     render json: @channel.errors.full_messages, status: 422
        # end
    end

    def show
        @channel = Channel.find(params[:id])
        @user = @channel.author
        render "api/channels/show"
    end

    def update
        @channel = Channel.find(params[:id])
        @user = @channel.author
        if @channel.update(channel_params)
            render "api/channels/show"
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find(params[:id])
        @channel_membership = @channel.channel_memberships.where({channel_id: @channel.id}).delete_all
        @channel.destroy
    end


    def add_member
         @user = User.find(params[:user_id])
         @channel = Channel.find(params[:channel_id])
         @channel_membership = ChannelMembership.new({user_id: params[:user_id], channel_id: params[:channel_id]})
         if @channel_membership.save
            render "api/channels/show"
         else
            render json: @channel_membership.errors.full_messages, status: 422
         end
    end

    def remove_member
         @user = User.find(params[:user_id])
         @channel = Channel.find(params[:channel_id])
         @channel_membership = ChannelMembership.where({user_id: params[:user_id], channel_id: params[:channel_id]})
        if @channel_membership.first.destroy
            render "api/channels/show"
        else
            render json: @channel_membership.errors.full_messages, status: 422
        end
    end

    def channel_params
         params.require(:channel).permit(:title, :description, :author_id, :private)
    end
end
