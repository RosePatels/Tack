class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    @channel = nil
    if params["channel_id"]
       @channel = Channel.find_by(id: params["channel_id"])
    elsif params["dm_id"]
      @channel = Dm.find_by(id: params["dm_id"])
    end
    stream_for @channel
  end

   def speak(data)
    message = nil
    if data["channel_id"]
      message = Message.create(body: data['message'], messageable_id: data["channel_id"], messageable_type: 'Channel', author_id: params["author_id"])
    else
      message = Message.create(body: data['message'], messageable_id: data["dm_id"], messageable_type: 'Dm', author_id: params["author_id"])
    end
    # debugger;
    socket = { message: message.body, author_id: params["author_id"], message_id: message.id }
    ChatChannel.broadcast_to(@channel, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
