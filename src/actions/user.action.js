import axios from "axios";
import {appConstant} from "../appConstants/appConstants";
import {API} from "../appConstants/environment";


export const register=(newUser)=>{
    const registerPromise=axios.post(`${API.ROOT}/users`, newUser ,{withCredentials:true});
    return {
        type:appConstant.REGISTER,
        payload: registerPromise
    }
}
export const addAdmin=(newUser)=>{
    const addAdminPromise=axios.post(`${API.ROOT}/users/admin`, newUser ,{withCredentials:true});
    return {
        type:appConstant.ADD_ADMIN,
        payload: addAdminPromise
    }
}

export const forgotPassword=(emailArr)=>{
    const forgotPassPromise=axios.post(`${API.ROOT}/sendMail`, emailArr ,{withCredentials:true});
    return {
        type:appConstant.FORGOT_PASSWORD,
        payload: forgotPassPromise
    }
}

export const changePassword=(newUser)=>{
    const changePasswordPromise=axios.put(`${API.ROOT}/users`, newUser ,{withCredentials:true});
    return {
        type:appConstant.CHANGE_PASSWORD,
        payload: changePasswordPromise
    }
}



export const checkLogin = () => {
    const checkLoginPromise = fetch(`${API.ROOT}/checklogin`, {credentials: 'include'})
        .then(res => res.json())
        .catch();
    return {
        type: appConstant.CHECK_LOGIN,
        payload: checkLoginPromise
    };
};