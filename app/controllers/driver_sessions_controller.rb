class DriverSessionsController < ApplicationController
  

  def new
    render 'new.html.erb'
  end

  def create
    driver = Driver.find_by(email: params[:email])
    if driver && driver.authenticate(params[:password])
      session[:driver_id] = driver.id
      flash[:success] = 'Successfully logged in!'
      redirect_to '/drivers'
    else
      flash[:warning] = 'Invalid email or password!'
      redirect_to '/drivers_login'
    end
  end

  def destroy
    session[:driver_id] = nil
    flash[:success] = 'Successfully logged out!'
    redirect_to '/drivers_login'
  end

end
