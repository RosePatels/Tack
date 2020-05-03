json.user do
        json.partial! "api/users/user", user: @user
        json.channelIds @user.channels.pluck(:id)
        json.dmIds @user.dms.pluck(:id)
end
json.channel do
        json.partial! "api/channels/channel", channel: @channel
        json.memberIds @channel.members.pluck(:id)
end
