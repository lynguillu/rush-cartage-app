class AddPodImage < ActiveRecord::Migration[5.0]
  def change
    add_column :pods, :image, :string
  end
end
