class AddGalleryTokenToPicture < ActiveRecord::Migration
  def change
    add_column :pictures, :gallery_token, :string
  end
end
