class ClientsController < ApplicationController
  def index
    @clients = Client.all
    render 'index.html.erb'
  end

  def show
    client_id = params[:id]
    @clients = Client.find_by(id: client_id)
    render "show.html.erb"
  end
end
