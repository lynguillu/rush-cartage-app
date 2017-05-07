class DeleteCulomsInPods < ActiveRecord::Migration[5.0]
  def change
    remove_column :pods, :actual_pickup, :datetime
    remove_column :pods, :scheduled_dropoff, :datetime
    remove_column :pods, :actual_dropoff, :datetime

  end
end
