class AddUniquenessToChannelMemberships < ActiveRecord::Migration[5.2]
  def change
    add_index :channel_memberships, [:channel_id, :user_id], unique: true
  end
end
