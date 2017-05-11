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
      load: params[:load],
      driver_id: params[:driver_id],
      client_id: params[:client_id],
      pickup_address: params[:pickup_address],
      dropoff_address: params[:dropoff_address],
      delivery_date: params[:delivery_date],
      consignee: params[:consignee],
      contact_person: params[:contact_person],
      notes: params[:notes],
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