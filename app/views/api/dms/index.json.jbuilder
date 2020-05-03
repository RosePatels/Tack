@dms.each do |dm|
    json.set! dm.id do
        json.partial! 'api/dms/dm', dm: dm
        json.memberIds dm.members.pluck(:id)
    end
end