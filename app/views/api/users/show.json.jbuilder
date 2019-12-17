json.partial! "api/users/user", user: @user

json.channelIds @user.channels.pluck(:id)