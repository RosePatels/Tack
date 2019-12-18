class ChangeColumnInChannels < ActiveRecord::Migration[5.2]
  def change
    change_column_null :channels, :private, true
  end
end
