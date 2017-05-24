class ApplicationController < ActionController::Base


  def current_admin
    @current_admin ||= Admin.find_by(id: session[:admin_id]) if session[:admin_id]
  end
  helper_method :current_admin

  def authenticate_admin!
    redirect_to '/admins_login' unless current_admin
  end

  def current_driver
    @current_driver ||= Driver.find_by(id: session[:driver_id]) if session[:driver_id]
  end
  helper_method :current_driver

  def authenticate_driver!
    redirect_to '/drivers_login' unless current_driver
  end

  def current_client
    @current_client ||= Client.find_by(id: session[:client_id]) if session[:client_id]
  end
  helper_method :current_client

  def authenticate_client!
    redirect_to '/drivers_login' unless current_client
  end

  def authenticate_admin_or_driver_or_client!
    redirect_to '/' unless current_admin || current_driver || current_client
  end

  def authenticate_admin_or_driver!
    redirect_to '/' unless current_admin || current_driver
  end
end
