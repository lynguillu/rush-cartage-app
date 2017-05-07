class AddColumsToPods < ActiveRecord::Migration[5.0]
  def change
    add_column :pods, :consignee, :string
    add_column :pods, :contact_person, :string
    add_column :pods, :notes, :string

  end
end
