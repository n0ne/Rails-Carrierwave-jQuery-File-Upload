class Picture < ActiveRecord::Base
  attr_accessible :description, :gallery_id, :image

  has_many :pictures, :dependent => :destroy
  
  mount_uploader :image, ImageUploader
end
