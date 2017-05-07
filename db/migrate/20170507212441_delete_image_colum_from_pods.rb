class DeleteImageColumFromPods < ActiveRecord::Migration[5.0]
  def change
    remove_column :pods, :image, :string
    remove_column :pods, :attachment, :boolean
  end
end
