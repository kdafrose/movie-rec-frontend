import {apiCall} from './utils'

export const getUserInfo = async(token:string) => {
    return await apiCall('/user', 'GET', undefined, token)
}