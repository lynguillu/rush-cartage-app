class ClientsController < ApplicationController
  def index
    @clients = Client.all
    @pods = current_client.pods.order(delivery_date: :desc).paginate(:page => params[:page], :per_page => 10)
    render "index.html.erb"
  end

  def new
    render 'new.html.erb'
  end

  def create
    client = Client.new(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    if client.save
      session[:client_id] = client.id
      flash[:success] = 'Successfully created client!'
      redirect_to '/'
    else
      flash[:warning] = 'Invalid email or password!'
      redirect_to '/clients_signup'
    end
  end

  def show
    client_id = params[:id]
    @client = Client.find_by(id: client_id)
    render "show.html.erb"
  end
end