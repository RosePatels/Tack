class CreateDms < ActiveRecord::Migration[5.2]
  def change
    create_table :dms do |t|
      t.integer :author_id, null: false
      t.index :author_id
      t.timestamps
    end
  end
end
