class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  enum role: [:admin,:developer]
  
  before_create :set_role

  has_many :project_assignments
  has_many :projects, through: :project_assignments

  has_many :task_assignments
  has_many :tasks, through: :task_assignments

  has_many :tasks_by_project , through: :projects

  scope :developers , -> { where(role: 1) }
  
  def is_admin?
    role.eql?('admin')
  end

  def set_role
    self.role = 'developer'
  end

  def tasks_by_project(project_id)
    tasks.where(project_id: project_id)
  end

  def self.group_by_task
    response = []
    developers.each do |developer|
      group_tasks = developer.tasks.group_by(&:status)
      response.push({developer: developer, tasks: group_tasks})
    end
    response
  end

  def my_projects
    response = []
    projects.each do |project|
      group_tasks = project.tasks.group_by(&:status)
      response.push({project: project, tasks: group_tasks})
    end
    response
  end

end
