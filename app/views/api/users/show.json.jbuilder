json.partial! "api/users/user", user: @user

json.channelIds @user.authored_channels.pluck(:id)