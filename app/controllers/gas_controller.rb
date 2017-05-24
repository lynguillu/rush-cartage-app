class GasController < ApplicationController
  def index
    @gas = Unirest.get("http://api.eia.gov/series/?api_key=bea6202b7a787c0b4d1daf15108ae4f7&series_id=PET.EMM_EPMM_PTE_YORD_DPG.W.json").body
    render "index.html.erb"

    
  end
end