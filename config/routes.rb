Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/admins" => "admins#index"
  get "/clients" => "clients#index"
  get "/drivers" => "drivers#index"
  # get "/admins/new" => "admins#new"
  # post "/admins" => "admins#create"

  # get "/clients/new" => "clients#new"
  # post "/clients" => "clients#create"

  # get "/drivers/new" => "drivers#new"
  # post "/drivers" => "drivers#create"

  # get "/admins/login" => "admins_sessions#new"
  # post "/admins/login" => "admins_sessions#create"
  # get "/admins/logout" => "admins_sessions#destroy"

  # get "/" => "pods#index"
  
  

end