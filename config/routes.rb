Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    resources :movies, param: :slug
    resources :reviews, only: [:create, :destroy] 
  end

  get '*path', to: 'pages#index', via: :all  
  get '*other', to: 'static#index'
end
