class PodsController < ApplicationController
  def index
    @pods = Pod.all
    render "index.html.erb"
  end

  def new
    @pods = Pod.new
    render "new.html.erb"
  end

  def create
    pod = Pod.new(
      driver_id: params[:driver_id],
      client_id: params[:client_id],
      pickup_address: params[:pickup_address],
      scheduled_pickup: params[:scheduled_pickup],
      actual_pickup: params[:actual_pickup],
      dropoff_address: params[:dropoff_address],
      scheduled_dropoff: params[:scheduled_dropoff],
      actual_dropoff: params[:actual_dropoff],
      asset: params[:asset]
    )
    pod.save
    redirect_to "/pods"
  end

  def show
    pod_id = params[:id]
    @pod = Pod.find_by(id: pod_id)
    render "show.html.erb"
  end
end