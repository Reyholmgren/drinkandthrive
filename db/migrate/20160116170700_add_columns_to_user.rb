class AddColumnsToUser < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :over_21, :boolean
    add_column :users, :gender, :string
    add_column :users, :weight, :integer
  end
end
