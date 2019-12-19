export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, channelId = null) => {
    debugger;
    return {
    type: OPEN_MODAL,
    modal,
    channelId
}}

export const closeModal = () => ({
    type: CLOSE_MODAL
})