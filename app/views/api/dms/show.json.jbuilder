json.user do
        json.partial! "api/users/user", user: @user
        json.channelIds @user.channels.pluck(:id)
        json.dmIds @user.dms.pluck(:id)
end
json.dm do
        json.partial! "api/dms/dm", dm: @dm
        json.memberIds @dm.members.pluck(:id)
end
