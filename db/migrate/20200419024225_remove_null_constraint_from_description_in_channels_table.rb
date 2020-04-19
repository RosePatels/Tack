class RemoveNullConstraintFromDescriptionInChannelsTable < ActiveRecord::Migration[5.2]
  def change
    change_column_null :channels, :description, true
  end
end
