class List < ApplicationRecord
    has_many :components
    has_many :parts, through: :components
    


end


