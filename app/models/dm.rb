class Dm < ApplicationRecord
    validates :author_id, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User'

    has_many :dm_memberships,
        primary_key: :id,
        foreign_key: :dm_id,
        class_name: 'DmMembership'

    has_many :members,
        through: :dm_memberships,
        source: :user

end