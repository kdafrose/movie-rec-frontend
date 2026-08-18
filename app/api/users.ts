import {apiCall} from './utils'

export const getUserInfo = async(token:boolean) => {
    return await apiCall('/user', 'GET', undefined, token)
}