json.partial! "api/users/user", user: @user

json.channelIds @user.channels.pluck(:id)
json.dmIds @user.dms.pluck(:id)