class AdminsController < ApplicationController
  def index
    @admins = Admin.all
    render "index.html.erb"
  end

  def new
    render 'new.html.erb'
  end

  def create
    admin = Admin.new(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    if admin.save
      session[:admin_id] = admin.id
      flash[:success] = 'Successfully created admin!'
      redirect_to '/'
    else
      flash[:warning] = 'Invalid email or password!'
      redirect_to '/admin_signup'
    end
  end

  def show
    admin_id = params[:id]
    @admins = Admin.find_by(id: admin_id)
    render "show.html.erb"
  end
end