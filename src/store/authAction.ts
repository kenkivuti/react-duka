import {SET_AUTHENTICATED } from "./type"

type AuthType = {
    name:string;
    isLoggedIn: boolean
}

export const setAuthentication = (isAuthenticated: AuthType) => ({
    type: SET_AUTHENTICATED,
    payload: isAuthenticated
})