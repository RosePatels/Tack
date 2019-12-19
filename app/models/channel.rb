class Channel < ApplicationRecord
    validates :author_id, :description, :title, presence: true
    validates :private, inclusion: { in: [true, false] }
    before_validation :set_defaults

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User'

    has_many :channel_memberships,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: 'ChannelMembership'
    
    has_many :members,
        through: :channel_memberships,
        source: :user

    def set_defaults
        self.private ||= false
    end
end