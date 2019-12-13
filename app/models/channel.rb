class Channel < ApplicationRecord
    validates :author_id, :description, :private, :title, presence: true
    validates :private, { in: [true, false ]}

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User'

    has_many :channel_memberships,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: 'ChannelMembership'
    
    has_many :users,
        through: :channel_memberships,
        source: :user
end