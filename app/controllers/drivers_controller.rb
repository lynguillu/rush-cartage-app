class DriversController < ApplicationController
  def index
    @drivers = Driver.all
    @pods = Pod.all
    render "index.html.erb"
  end
  
  def new
    render 'new.html.erb'
  end

  def create
    driver = Driver.new(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    if driver.save
      session[:driver_id] = driver.id
      flash[:success] = 'Successfully created driver!'
      redirect_to '/drivers'
    else
      flash[:warning] = 'Invalid email or password!'
      redirect_to '/drivers_signup'
    end
  end

  def show
    driver_id = params[:id]
    @drivers = Driver.find_by(id: driver_id)
    render "show.html.erb"
  end
end
