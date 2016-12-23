class Project < ActiveRecord::Base
	has_many :tasks , dependent: :destroy
	has_many :project_assignments
	has_many :developers, through: :project_assignments, :source => :user

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
end
