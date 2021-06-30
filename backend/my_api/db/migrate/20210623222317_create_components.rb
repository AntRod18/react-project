class CreateComponents < ActiveRecord::Migration[6.1]
  def change
    create_table :components do |t|
      t.string :kind
      t.integer :list_id
      t.integer :part_id

      t.timestamps
    end
  end
end
