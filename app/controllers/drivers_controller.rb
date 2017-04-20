class DriversController < ApplicationController
  def index
    @drivers = Driver.all
    render 'index.html.erb'
  end
end
