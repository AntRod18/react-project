class Component < ApplicationRecord
    belongs_to :list
    belongs_to :part
    # this component is the link between list and part
end
