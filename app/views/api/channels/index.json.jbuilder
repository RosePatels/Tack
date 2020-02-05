@channels.each do |channel|
    json.set! channel.id do
        json.partial! 'channel', channel: channel
        json.memberIds channel.members.pluck(:id)
    end
end