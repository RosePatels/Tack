class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :avatar_url, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.index :name
      t.index :email, unique: true
      t.index :session_token, unique: true
    end
  end
end
