class ChannelMembership < ApplicationRecord
    validates :channel_id, :user_id, presence: true
    
    belongs_to :channel,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: 'Channel'

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'
end
