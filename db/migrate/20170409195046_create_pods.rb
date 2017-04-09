class CreatePods < ActiveRecord::Migration[5.0]
  def change
    create_table :pods do |t|
      t.integer :client_id
      t.integer :driver_id
      t.string :pickup_address
      t.string :dropoff_address
      t.boolean :attachment
      t.datetime :scheduled_pickup
      t.datetime :scheduled_dropoff
      t.datetime :actual_pickup
      t.string :actual_dropoff

      t.timestamps
    end
  end
end
