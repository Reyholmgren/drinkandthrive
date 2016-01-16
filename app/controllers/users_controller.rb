class UsersController < ApplicationController
  def index
    @users= User.all
    render "users"
  end

  def update
    @user = User.find(current_user)
    @user.update(user_params)
    render 'user'
  end



  private
    def user_params
      params.require(:user).permit(:name, :gender, :weight)
    end

end

