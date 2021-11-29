import {appConstant} from "../appConstants/appConstants";


export const userReducer = (state = null, action) => {
    switch(action.type) {
        case appConstant.CHECK_LOGIN:
            // console.log(action.payload.user)
            return action.payload.success ? action.payload.user : null;
        case appConstant.REGISTER:
            return action.payload.success ? action.payload: null;
        case appConstant.ADD_ADMIN:
            return action.payload.success ? action.payload: null;
        case appConstant.CHANGE_PASSWORD:
            return state;
        case appConstant.FORGOT_PASSWORD:
            return state;
        default:
            return state;
    }
};