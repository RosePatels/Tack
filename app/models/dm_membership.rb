class DmMembership < ApplicationRecord
    validates :dm_id, :user_id, presence: true


    belongs_to :dm,
        primary_key: :id,
        foreign_key: :dm_id,
        class_name: 'Dm'

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'
end