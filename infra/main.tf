terraform {
  required_providers {
    linode = {
      source = "linode/linode"
    }
  }
}

terraform {
  backend "s3" {
    bucket                      = "tf-state"
    key                         = "learn.adsgames.net/"
    region                      = "us-east-1"
    endpoint                    = "us-east-1.linodeobjects.com"
    skip_credentials_validation = true
  }
}

variable "linode_token" {
  description = "Your API access token"
  type        = string
  sensitive   = true
}

provider "linode" {
  token = var.linode_token
}

resource "linode_object_storage_bucket" "site_bucket" {
  label   = "learn.adsgames.net"
  cluster = "us-east-1"
  acl     = "public-read"
}
