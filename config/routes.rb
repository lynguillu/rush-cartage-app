Rails.application.routes.draw do
  get "/" => "admins#index"
  
  get "/admins" => "admins#index"
  get "/admins/:id" => "admins#show"

  get "/clients" => "clients#index"
  get "/clients/:id" => "clients#show"

  get "/drivers" => "drivers#index"
  get "/drivers/:id" => "drivers#show"

  get "/pods" => "pods#index"
  get "pods/new" => "pods#new"
  post "/pods" => "pods#create"
  get "/pods/:id/" => "pods#show"
  
  # get "/admins/new" => "admins#new"
  # post "/admins" => "admins#create"

  # get "/clients/new" => "clients#new"
  # post "/clients" => "clients#create"

  # get "/drivers/new" => "drivers#new"
  # post "/drivers" => "drivers#create"

  # get "/admins/login" => "admins_sessions#new"
  # post "/admins/login" => "admins_sessions#create"
  # get "/admins/logout" => "admins_sessions#destroy"

  
  
  

end