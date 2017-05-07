class RenameColumnsInPods < ActiveRecord::Migration[5.0]
  def change
    rename_column :pods, :scheduled_pickup, :delivery_date
  end
end
