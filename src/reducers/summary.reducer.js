import {appConstant} from "../appConstants/appConstants";


export const summaryReducer = (state = [], action) => {
    switch(action.type) {

        case appConstant.SAVE_SUMMARY:
            return action.payload;

        default:
            return state;
    }
};