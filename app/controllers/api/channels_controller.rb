class Api::ChannelsController < ApplicationController
    def create
        # ActiveRecord::Base.transaction do
            @user = current_user
            @channel = Channel.new(channel_params)
        # end
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
        render "api/channels/show"
    end

    def update
        @channel = Channel.find(params[:id])
        if @channel.update(channel_params)
            render "api/channels/show"
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def add_member
         @user = User.find(params[:user_id])
         @channel = Channel.find(params[:channel_id])
         @channel_membership = ChannelMembership.new({user_id: params[:user_id], channel_id: params[:channel_id]})
         debugger
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
         debugger
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