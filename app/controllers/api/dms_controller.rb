class Api::DmsController < ApplicationController

    def create

        @user = current_user
        @other_user = User.find_by(id: params[:user_id])
        @dm = Dm.new(dm_params)
        if @dm.save
            @dm_membership1 = @dm.dm_memberships.new({user_id: current_user.id})
            @dm_membership2 = @dm.dm_memberships.new({user_id: params[:user_id]})
            @dm_membership1.save!
            @dm_membership2.save!
            render "api/dms/show"
        else
            render json: @dm.errors.full_messages, status: 422
        end
          #to create the dm:
         #create DM - DM.new(dm_params)
         #dm_params will pass in author_id and params[:user_id] - pass it in via api util
         #save @dm
         #create @dm_membership = @dm.dm_memberships.new
         #@dm_membership.save
         #return render "api/dms/show"

         #dm controller = index, create, show
         #dm table = id, timestamps, author_id
         #dm memberships - id, dm_id, user_id, timestamps
    end


    def show
        @dm = Dm.find(params[:id])
        @user = @dm.author
        render "api/dms/show"
    end

    def dm_params
        params.require(:dm).permit(:author_id)
    end

end