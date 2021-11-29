import {appConstant} from "../appConstants/appConstants";


export const filterReducer = (state = [], action) => {
    switch(action.type) {
        case appConstant.ADD_TO_FILTER:
            return [...state,action.payload];
        case appConstant.GET_FILTER:
            return state;
        case appConstant.DELETE_ONE_FILTER:
            return state;
        default:
            return state;
    }
};