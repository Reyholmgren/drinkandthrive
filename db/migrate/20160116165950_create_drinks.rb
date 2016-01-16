class CreateDrinks < ActiveRecord::Migration
  def change
    create_table :drinks do |t|
      t.belongs_to :drinking_session
      t.string :name
      t.integer :size

      t.timestamps null: false
    end
  end
end
