class AddAttachmentAssetToPods < ActiveRecord::Migration
  def self.up
    change_table :pods do |t|
      t.attachment :asset
    end
  end

  def self.down
    remove_attachment :pods, :asset
  end
end
