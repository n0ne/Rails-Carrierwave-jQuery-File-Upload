
This is a fork of orignal project by [n0one](https://github.com/n0ne/Rails-Carrierwave-jQuery-File-Upload) which has been modified 
slightly to upload to amazon s3 instead of using local storage. 


# Rails 3.2.3 + Carrierwave + amazom s3  + jQuery File Upload 

A small application that demonstrates the work of these programs together.

More information about [jQuery File Upload](http://blueimp.github.com/jQuery-File-Upload/) or on [Github](https://github.com/blueimp/jQuery-File-Upload).

We use [slimbox2](http://www.digitalia.be/software/slimbox2) plugin for viewing pictures.
And we use plugin [jCrop](http://deepliquid.com/content/Jcrop.html) for editing pictures.

## Getting Started

* Clone git:

          git clone https://github.com/shaunakv1/Rails-Carrierwave-S3-jQuery-File-Upload.git

* Change folder:

          cd Rails-Carrierwave-S3-jQuery-File-Upload

* Install gems:

          bundle install

* Make database:

          rake db:migrate

* Upgrade bootstrap files:

          rails g bootstrap:install -f

* set the following environment veriables for amazon s3 configuration :

```
export TRIAL_AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
export TRIAL_AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY
export TRIAL_AWS_S3_BUCKET=BUCKET_NAME
```

* Start server:

          rails s

* Open browser:

          http://localhost:3000/galleries


## Features

- (20-Mar-2013): Can now add images to a gallery when it's "new" (ie. before it has been saved)
