Rails.application.routes.draw do
    root to: "home#index"

  devise_for :users do
    delete '/users/sign_out' => 'devise/sessions#destroy'

  end
  namespace :api do
    resources :projects do
      resources :tasks do
        post "assign_tasks"
      end
      post "assign_projects"
      get "developers"

    end
   get 'developer/:id' => 'users#show'
  get 'developers' => 'users#developers'
  get 'developers/:id/projects' => 'users#projects'
  get 'developers/:user_id/projects/:project_id/tasks' =>'tasks#developer_project_tasks'
  get 'all_tasks' => 'tasks#all_tasks'
  get "developers_tasks" => 'users#developers_tasks'
  end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
