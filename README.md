# Rails 3.2.3 + Carrierwave + jQuery File Upload 

A small application that demonstrates the work of these programs together.

More information about [jQuery File Upload](http://blueimp.github.com/jQuery-File-Upload/) or on [Github](https://github.com/blueimp/jQuery-File-Upload).

We use [slimbox2](http://www.digitalia.be/software/slimbox2) plugin for viewing pictures.
And we use plugin [jCrop](http://deepliquid.com/content/Jcrop.html) for editing pictures.

## Getting Started

* Clone git:

          git clone git@github.com:n0ne/Rails-Carrierwave-jQuery-File-Upload.git

* Change folder:

          cd Rails-Carrierwave-jQuery-File-Upload

* Install gems:

          bundle install

* Make database:

          rake db:migrate

* Upgrade bootstrap files:

          rails g bootstrap:install -f

* Start server:

          rails s

* Open browser:

          http://localhost:3000/galleries

## Features

- (20-Mar-2013): Can now add images to a gallery when it's "new" (ie. before it has been saved)
