class Pod < ApplicationRecord
  belongs_to :client
  belongs_to :driver
end
