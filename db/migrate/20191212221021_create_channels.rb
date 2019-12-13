class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :author_id, null: false
      t.index :author_id
      t.string :description, null: false
      t.boolean :private, null: false, default: false
      t.string :title, null: false
      t.index :title, unique: true
      t.timestamps
    end
  end
end
