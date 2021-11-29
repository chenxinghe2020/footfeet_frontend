import {appConstant} from "../appConstants/appConstants";

export const saveSummary=(newSummary)=>{
    return {
        type:appConstant.SAVE_SUMMARY,
        payload: newSummary
    }
}