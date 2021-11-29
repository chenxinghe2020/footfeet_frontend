import axios from "axios";
import {appConstant} from "../appConstants/appConstants";
import {API} from "../appConstants/environment";

export const addReview=(newReview)=>{
    console.log(newReview);
    const addReviewPromise=axios.post(`${API.ROOT}/reviews`, newReview ,{withCredentials:true});
    return {
        type:appConstant.ADD_REVIEW,
        payload: addReviewPromise
    }
}



export const getReviewsByProductId=(id)=>{
    const getReviewPromise=axios.get(`${API.ROOT}/reviews/${id}`,{withCredentials:true});
    return {
        type:appConstant.GET_REVIEW_BY_PRODUCT_ID,
        payload:getReviewPromise,
    }

}