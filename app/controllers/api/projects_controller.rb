class Api::ProjectsController < ApplicationController
  before_filter :set_project, only: [:show]

  def index
    render status: 200, json: Project.all.as_json
  end

  def show
    render status: 200, json: @project.as_json
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render status: 200, json: @project.as_json
    else
      render status: 400, json: { message: "Failed to create project" }
    end 
  end

  def assign_projects
    # begin 
    project = Project.find(params[:project_id])
    response = project.assign_to_developers(params)
    if response
      render status: 200, json: { message: "Successfully assigned" }
    else
      render status: 400, json: { message: "Failed to create project" }
    end
  
      # project.developers = users
      # render status: 200, json: { message: "Successfully assigned" }
    # rescue => e
      
    # end
  end

  def developers
    project = Project.find(params[:project_id])
    render status: 200, json: project.developers.as_json
  end

  private

    def set_project
      @project = Project.find(params[:id]) 
    end
    def project_params
      params.require(:project).permit(:name)
    end
end
