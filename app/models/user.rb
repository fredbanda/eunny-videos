class User < ApplicationRecord
  # Include default devise modules. Others available are:
   
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

         has_one_attached :avatar do |attachable|
          attachable.variant :thumb, resize_to_limit: [100, 100]
    end
end
