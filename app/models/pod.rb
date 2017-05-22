class Pod < ApplicationRecord
  belongs_to :client, optional: true
  belongs_to :driver, optional: true
  has_attached_file :asset,
    source_file_options: {all: '-auto-orient'},
    styles: { 
      original: "",
      medium: "1024x768", 
      small: "500x334", 
      thumb: "100x67" 
    }
  validates_attachment_content_type :asset, content_type: /\Aimage\/.*\z/
  before_save :convert_images

  def convert_images
    if asset_content_type == 'image/png' || asset_content_type == 'image/jpeg'
      file_path = asset.queued_for_write[:original].path.to_s
      temp_file_name = asset_file_name.split('.')[0] + '.pdf'
      pdf = Prawn::Document.new(:page_size => "LETTER", :page_layout => :portrait)
      pdf.image File.open("#{file_path}"), :fit => [512, 692], position: :center
      pdf = Prawn::Document.new(:page_size => [1297, 1672])
      pdf.image File.open("#{file_path}"), :fit => [1197, 1572], position: :center
      pdf.render_file temp_file_name
      asset_content_type = 'application/pdf'
      self.asset = File.open(temp_file_name)
      File.delete(temp_file_name)
    end
  end
end
