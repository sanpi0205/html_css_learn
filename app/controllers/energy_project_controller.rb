# coding: utf-8
class EnergyProjectController < ApplicationController
	def info
		@checkbox_labels =["煤炭发电","陆上风电","太阳能光伏","天然气发电"]
		@xxx= Array.new
		book = Spreadsheet.open '/home/erd/Desktop/data.xls'
		sheet1 = book.worksheet 'data'
		
		(1..1).each do |i|
			@xxx[i] = sheet1.row(i).to_a
		end
		@projects = Project.all
	end

	def index
		
	end
end
