class DieselPricesController < ApplicationController
  def index
    @data = Unirest.get("http://api.eia.gov/series/?api_key=bea6202b7a787c0b4d1daf15108ae4f7&series_id=PET.EMD_EPD2D_PTE_R20_DPG.W").body
    @series_data = @data["series"][0]["data"]
    @geography = @data["series"][0]["geography"]
    @updated = @data["series"][0]["updated"]
    @name = @data["series"][0]["name"]
    @units = @data["series"][0]["units"]
    render "index.html.erb"
  end
end
