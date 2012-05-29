class Picture < ActiveRecord::Base
  attr_accessible :description, :gallery_id, :image

  belongs_to :gallery
  
  mount_uploader :image, ImageUploader


  def to_jq_upload
    {
      "name" => read_attribute(:image),
      "size" => image.size,
      "url" => image.url,
      "thumbnail_url" => image.thumb.url,
      "delete_url" => id,
      "picture_id" => id,
      "delete_type" => "DELETE"
    }
  end
end
