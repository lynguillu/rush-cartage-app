class Pod < ApplicationRecord
  belongs_to :client
  belongs_to :driver
  has_attached_file :asset, styles: { 
    medium: "1024x768>", 
    small: "500x334>", 
    thumb: "100x67" 
  }
  validates_attachment_content_type :asset, content_type: /\Aimage\/.*\z/

end
