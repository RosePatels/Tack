class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    @channel = Channel.find_by(id: params["channel_id"])
    stream_for @channel
  end

   def speak(data)
    message = Message.create(body: data['message'], messageable_id: params["channel_id"], messageable_type: 'Channel', author_id: params["author_id"])
    socket = { message: message.body, author_id: params["author_id"] }
    ChatChannel.broadcast_to(@channel, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
