class CreateParts < ActiveRecord::Migration[6.1]
  def change
    create_table :parts do |t|
      t.string :name
      t.text :description
      t.integer :price

      t.timestamps
    end
  end
end
