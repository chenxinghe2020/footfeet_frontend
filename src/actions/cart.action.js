import axios from "axios";
import {appConstant} from "../appConstants/appConstants";
import {API} from "../appConstants/environment";


export const addToCart=(newOrderProduct)=>{
    const addCartPromise=axios.post(`${API.ROOT}/carts`, newOrderProduct ,{withCredentials:true});
    return {
        type:appConstant.ADD_TO_CART,
        payload: addCartPromise
    }
}

export const updateCart=(newOrderProduct)=>{
    const updateCartPromise=axios.post(`${API.ROOT}/carts/update`, newOrderProduct ,{withCredentials:true});
    return {
        type:appConstant.UPDATE_CART,
        payload: updateCartPromise
    }
}


export const deleteFromCart=(id)=>{

    const deletePromise=axios.put(`${API.ROOT}/carts/${id}` ,{withCredentials:true});
    return {
        type:appConstant.DELETE_FROM_CART,
        payload: id
    }
}

export const getCart=(id)=>{

    const getCartPromise=axios.get(`${API.ROOT}/carts/${id}`,{withCredentials:true});
    return {
        type:appConstant.GET_CART,
        payload:getCartPromise,
    }

}