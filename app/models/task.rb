class Task < ActiveRecord::Base
	belongs_to :project
	has_many :task_assignments
	has_many :developers, through: :task_assignments, :source => :user

    enum status: [:new_task, :inprogress, :completed]
  	before_create :set_task_status
  	validates :name, presence: true
	def assign_to_developers(params)
		begin
        	users = User.where(id: params[:developers])
        	self.developers = users
    	true
		rescue => e
			false
		end
	end

	def set_task_status
		self.status = 'new_task'
	end
end
