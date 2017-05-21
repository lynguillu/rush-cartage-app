class AdminSessionsController < ApplicationController
  def new
    render 'new.html.erb'
  end

  def create
    admin = Admin.find_by(email: params[:email])
    if admin && admin.authenticate(params[:password])
      session[:admin_id] = admin.id
      flash[:success] = 'Successfully logged in!'
      redirect_to "/admins" 
      
    else
      flash[:warning] = 'Invalid email or password!'
      redirect_to '/admins_login'
    end
  end

  def destroy
    session[:admin_id] = nil
    flash[:success] = 'Successfully logged out!'
    redirect_to '/admins_login'
  end
end
