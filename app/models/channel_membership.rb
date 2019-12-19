class ChannelMembership < ApplicationRecord
    validates :channel_id, :user_id, presence: true
    validates :user_id, uniqueness: { scope: :channel_id }
    
    belongs_to :channel,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: 'Channel'

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'
end
