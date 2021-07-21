class ComponentsController < ApplicationController
  before_action :set_component, only: [:show, :update, :destroy]

  # GET /components
  def index
    @components = Component.all

    render json: @components
  end

  # GET /components/1
  def show
    render json: @component
  end

  # POST /components
  def create
    # @list = List.find_by_id(params[:list_id])
    # @part = Part.find_by_id(params[:part_id])
    @component = Component.create(component_params)
    if @component.save
      render json: @component, status: :created, location: @component
    else
      render json: @component.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /components/1
  def update
    if @component.update(component_params)
      render json: @component
    else
      render json: @component.errors, status: :unprocessable_entity
    end
  end

  # DELETE /components/1
  def destroy
    @component.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_component
      @component = Component.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def component_params
      params.require(:component).permit(:kind, :list_id, :part_id)
    end
end
