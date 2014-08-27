# coding: utf-8
class EnergyProjectController < ApplicationController
	def info
		@checkbox_labels =["煤炭发电","陆上风电","太阳能光伏","天然气发电"]
		@projects = Project.all
		#@test = {"longitude"=>100,"latitude"=>50}
		#render :json => @projects
	end

	def index
		@testid = {"longitude"=>100,"latitude"=>50}
		
		#respond_to do |format|
		#	format.json {render :json => @testid}
		#end
	end

	def tt
		
	end

end
