class AdminsController < ApplicationController
  def index
    @admins = Admin.all
    render 'index.html.erb'
  end
end
