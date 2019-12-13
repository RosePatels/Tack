class Api::ChannelMembershipsController < ApplicationController
    def create
        channelmembership = ChannelMembership.new(channel_membership_params)
        if channelmembership.save
            #what do we render here?
        else
            render json: channelmembership.errors.full_messages, status: 422     
        end
    end

    def destroy
        channelmembership = ChannelMembership.find(params[:id])
        channelmembership.destroy
        #what do we render here?
    end

    def channel_membership_params
        params.require(:channel_membership).permit(:channel_id, :user_id)
    end
end
