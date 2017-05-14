class ClientSessionsController < ApplicationController
  def new
    render 'new.html.erb'
  end

  def create
    client = Client.find_by(email: params[:email])
    if client && client.authenticate(params[:password])
      session[:client_id] = client.id
      flash[:success] = 'Successfully logged in!'
      redirect_to "/clients/#{client.id}" 
    else
      flash[:warning] = 'Invalid email or password!'
      redirect_to '/clients_login'
    end
  end

  def destroy
    session[:client_id] = nil
    flash[:success] = 'Successfully logged out!'
    redirect_to "/"
  end

end


