import {apiCall, getApiCall} from './utils'

export const signin = async (email: string, password: string) => {
    const queryParams = { email, password };
    return await getApiCall('/signin', queryParams);
};

export const signup = async(email:string, password:string) => {
    const body = {email, password};
    return await apiCall('/signup', 'POST', body);
}