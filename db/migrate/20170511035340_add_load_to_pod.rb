class AddLoadToPod < ActiveRecord::Migration[5.0]
  def change
    add_column :pods, :load, :integer

  end
end
