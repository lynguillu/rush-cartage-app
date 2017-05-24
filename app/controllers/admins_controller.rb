class AdminsController < ApplicationController
  def index
    @pods = Pod.order(delivery_date: :desc).paginate(:page => params[:page], :per_page => 10)
    @admins = Admin.all
      @data = Unirest.get("http://api.eia.gov/series/?api_key=bea6202b7a787c0b4d1daf15108ae4f7&series_id=PET.EMD_EPD2D_PTE_R20_DPG.W").body
    @series_data = @data["series"][0]["data"]
    @geography = @data["series"][0]["geography"]
    @updated = @data["series"][0]["updated"]
    @name = @data["series"][0]["name"]
    @units = @data["series"][0]["units"]
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
      redirect_to '/admins'
    else
      flash[:warning] = 'Invalid email or password!'
      redirect_to '/admins_signup'
    end
  end

  def show
    admin_id = params[:id]
    @admins = Admin.find_by(id: admin_id)
    render "show.html.erb"
  end
end