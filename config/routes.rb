
Rails.application.routes.draw do

  get "/" => "pages#home"
  
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

  get "/clients_signup" => "clients#new"
  post "/clients" => "clients#create"


  get "/drivers_signup" => "drivers#new"
  post "/drivers" => "drivers#create"

  get "/admins_signup" => "admins#new"
  post "/admins" => "admins#create"

  get "/admins_login" => "admin_sessions#new"
  post "/admins_login" => "admin_sessions#create"
  get "/admins_logout" => "admin_sessions#destroy"

  get "/drivers_login" => "driver_sessions#new"
  post "/drivers_login" => "driver_sessions#create"
  get "/drivers_logout" => "driver_sessions#destroy"
  
  get "/clients_login" => "client_sessions#new"
  post "/clients_login" => "client_sessions#create"
  get "/clients_logout" => "client_sessions#destroy"
  
  get "/about_us" => "about_us#index"

  get "/services" => "services#index"

  get "/contacts" => "contacts#index"
 
  get "/diesel_prices" => "diesel_prices#index"


end