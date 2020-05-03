@users.each do |user|
    json.set! user.id do
        json.partial! 'api/users/user', user: user
        json.channelIds user.channels.pluck(:id)
        json.dmIds user.dms.pluck(:id)
    end
end