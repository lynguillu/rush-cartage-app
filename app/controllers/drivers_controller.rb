class DriversController < ApplicationController
  def index
    @drivers = Driver.all
    render "index.html.erb"
  end

  def show
    driver_id = params[:id]
    @drivers = Driver.find_by(id: driver_id)
    render "show.html.erb"
  end
end
