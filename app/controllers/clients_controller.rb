class ClientsController < ApplicationController
  def index
    @clients = Client.all
    render 'index.html.erb'
  end
end
