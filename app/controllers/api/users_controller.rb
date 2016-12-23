class Api::UsersController < ApplicationController

	before_filter :set_user, only: [:projects,:show]
	def developers
		render status: 200, json: User.developers
	end

	def projects
		render status: 200, json: @user.my_projects
	end

	def show
		render status: 200, json: @user.as_json
	end

	def developers_tasks
		render status: 200, json: User.group_by_task
	end
	private
	def set_user
		@user = User.find(params[:id])
	end
end
