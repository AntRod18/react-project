class Component < ApplicationRecord
    belongs_to :list
    belongs_to :part
    # this component is the link between list and part


    def add_components()
        names = ["processor", "cooler", "motherboard", "memory",
            "storage", "graphics", "power", "case"]

             names.each do |n|
                self.components.build(kind:n)
             end

    end
end
