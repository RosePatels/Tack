class Api::ChannelsController < ApplicationController
    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render "api/channels/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
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
            render json: @user.errors.full_messages, status: 422
        end
    end

    def channel_params
         params.require(:channel).permit(:title, :description, :author_id, :private)
    end
end
