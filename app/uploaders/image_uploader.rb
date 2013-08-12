# encoding: utf-8

class ImageUploader < CarrierWave::Uploader::Base

  include CarrierWave::RMagick

  # Include the Sprockets helpers for Rails 3.1+ asset pipeline compatibility:
  include Sprockets::Helpers::RailsHelper
  include Sprockets::Helpers::IsolatedHelper

  # Choose what kind of storage to use for this uploader:
  # storage :file
   storage :fog

  include CarrierWave::MimeTypes
  process :set_content_type

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  resize_to_limit(1024, 768)

  def extension_white_list
    %w(jpg jpeg gif png)
  end

  version :large do
    process :crop
  end

  version :preview do
    process :crop
    resize_to_limit(690, 518)
  end

  version :thumb do
    process :crop
    resize_to_fill(100, 100)
  end


  def crop
    if model.crop_x.present?
      manipulate! do |img|
        x = model.crop_x.to_i
        y = model.crop_y.to_i
        w = model.crop_w.to_i
        h = model.crop_h.to_i
        img = img.crop(x, y, w, h)
        img
      end
    end
  end

  def convert_to_grayscale
    manipulate! do |img|
      img.colorspace = Magick::GRAYColorspace
      img
    end
  end

  def brightness
    manipulate! do |img|
      img.modulate(1.20, 0.5, 1.2)
    end
  end
end
