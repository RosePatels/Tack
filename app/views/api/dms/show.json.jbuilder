json.user do
        json.partial! "api/users/user", user: @user
        json.channelIds @user.channels.pluck(:id)
        json.dmIds @user.dms.pluck(:id)
end
json.other_user do
        json.partial! "api/users/user", user: @other_user
        json.channelIds @other_user.channels.pluck(:id)
        json.dmIds @other_user.dms.pluck(:id)
end
json.dm do
        json.partial! "api/dms/dm", dm: @dm
        json.memberIds @dm.members.pluck(:id)
end