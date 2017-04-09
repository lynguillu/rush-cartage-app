class Driver < ApplicationRecord
  has_secure_password
  has_many :pods
end
