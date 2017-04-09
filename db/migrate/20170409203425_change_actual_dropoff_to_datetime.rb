class ChangeActualDropoffToDatetime < ActiveRecord::Migration[5.0]
  def change
    remove_column :pods, :actual_dropoff, :datetime
    add_column :pods, :actual_dropoff, :datetime
  end
end
