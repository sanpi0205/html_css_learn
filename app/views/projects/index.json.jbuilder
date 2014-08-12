json.array!(@projects) do |project|
  json.extract! project, :id, :title, :capacity, :generation, :power_category, :location, :longitude, :latitude
  json.url project_url(project, format: :json)
end
