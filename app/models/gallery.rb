class Gallery < ActiveRecord::Base
  attr_accessible :cover, :description, :name

  belongs_to :gallery
  
end
