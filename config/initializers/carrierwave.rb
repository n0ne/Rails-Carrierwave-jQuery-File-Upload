CarrierWave.configure do |config|
  config.fog_credentials = {
    provider: "AWS",
    aws_access_key_id: ENV["TRIAL_AWS_ACCESS_KEY_ID"],
    aws_secret_access_key: ENV["TRIAL_AWS_SECRET_ACCESS_KEY"]
  }
  config.fog_directory = ENV["TRIAL_AWS_S3_BUCKET"]
end