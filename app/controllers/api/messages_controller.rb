class Api::MessagesController < ApplicationController

    def index
        @messages = Message.where(messageable_id: params["channel_id"]);
        # debugger;
        render "api/messages/index"
    end


    def show
        # debugger;
        @message = Message.find(params[:id]);
        render "api/messages/show"
    end
end