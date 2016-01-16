class CreateDrinkingSessions < ActiveRecord::Migration
  def change
    create_table :drinking_sessions do |t|
      t.belongs_to :user
      t.integer :num_drinks

      t.timestamps null: false
    end
  end
end
