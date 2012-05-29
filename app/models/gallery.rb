class Gallery < ActiveRecord::Base
  attr_accessible :cover, :description, :name
  
  has_many :pictures, :dependent => :destroy  
end
