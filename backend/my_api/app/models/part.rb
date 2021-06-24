class Part < ApplicationRecord
    has_many :components
    has_many :lists, through: :components
end
