class AddNullToChannels < ActiveRecord::Migration[5.2]
  def change
    change_column_null :channels, :private, false
  end
end
