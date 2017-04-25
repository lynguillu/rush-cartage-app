class AdminsController < ApplicationController
  
  def index
    @admins = Admin.all
    render "index.html.erb"
  end

  def show
    admin_id = params[:id]
    @admins = Admin.find_by(id: admin_id)
    render "show.html.erb"
  end
end