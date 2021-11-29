import axios from "axios";
import {appConstant} from "../appConstants/appConstants";
import {API} from "../appConstants/environment";


export const getShipping=()=>{

    const getShippingPromise=axios.get(`${API.ROOT}/shippings`,{withCredentials:true});
    return {
        type:appConstant.GET_SHIPPING,
        payload:getShippingPromise,
    }
}