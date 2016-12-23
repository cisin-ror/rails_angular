class Api::TasksController < ApplicationController
	respond_to :json
	before_filter :set_project, except: [:all_tasks]

	def index
		render status: 200, json: @project.tasks.as_json
	end
	
	def create
		@task = @project.tasks.new(task_params)
		if @task.save
			 render status: 200, json: @task.as_json
		else
      		render status: 400, json: { message: "Failed to create task" }
		end
	end

	def update

	end

	def update
		task = Task.find(params[:id])
		if task.update(task_params)
			render status: 200, json: task
		else
			render status: 400, json: { message: "Task update failed" }
		end
	end

  	def assign_tasks
	    task = Task.find(params[:task_id])
	    response = task.assign_to_developers(params)
	    if response
	      render status: 200, json: { message: "Successfully assigned" }
	    else
	      render status: 400, json: { message: "Failed to assign task" }
	    end
  	end

  	def developer_project_tasks
  		uesr = User.find(params[:user_id])
  		tasks = uesr.tasks_by_project(params[:project_id])
  		render status: 200, json: tasks
  	end

  	def all_tasks
  		render status: 200, json: Task.all
  	end

	private

	def set_project
		@project = Project.find(params[:project_id])
	end

	def task_params
		params.require(:task).permit(:name, :status)
	end
end
