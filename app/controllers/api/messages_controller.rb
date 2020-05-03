class Api::MessagesController < ApplicationController

    def index
        @messages = nil
        if params["channel_id"]
            @messages = Message.where(messageable_id: params["channel_id"], messageable_type: "Channel");
        elsif params["dm_id"]
            @messages = Message.where(messageable_id: params["dm_id"], messageable_type: "Dm");
        end
        # debugger;
        render "api/messages/index"
    end


    def show
        # debugger;
        @message = Message.find(params[:id]);
        render "api/messages/show"
    end

    def update
        @message = Message.find(params[:id])
        if @message.update(message_params)
            render "api/messages/show"
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def destroy
        @message = Message.find(params[:id])
        @message.destroy
    end

    def message_params
        params.require(:message).permit(:body, :author_id, :messageable_type, :messageable_id, :created_at)
    end
end