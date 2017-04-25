class AddPhoneExtension < ActiveRecord::Migration[5.0]
  def change
    add_column :clients, :ext, :string
  end
end
