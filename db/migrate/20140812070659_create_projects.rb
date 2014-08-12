class CreateProjects < ActiveRecord::Migration
  def self.up
    create_table :projects do |t|
      t.string :title
      t.float :capacity
      t.float :generation
      t.string :power_category
      t.string :location
      t.float :longitude
      t.float :latitude

      t.timestamps
    end
  end

  def self.down
    drop.table :projects
  end
end
