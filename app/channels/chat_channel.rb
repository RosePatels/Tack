class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
      stream_for 'chat_channel'
  end

   def speak(data)
    message = Message.create(body: data['message'], messageable_id: 5, messageable_type: 'Channel', author_id: 7)
    socket = { message: message.body }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
