const BASE_URL = 'https://88mfhtpanb.execute-api.ca-west-1.amazonaws.com'

/**
 * API function for methods: POST, DELETE, PATCH 
 * @param endpoint url endpoint for lambda functions
 * @param method POST,DELETE,PATCH
 * @param body data to send for request
 * @param token JWT auth token
 * @returns data response
 */

export const apiCall = async(endpoint:string, method:string, body?:Record<string, string | number>, token?:string) =>{
    let headers:Record<string, string> = {
        'Content-Type':'application/json'
    }

    if(token !== '') headers = {...headers, 'Authorization': `Bearer ${token}`}

    try{
        const response = await fetch(`${BASE_URL}/${endpoint}`,{
            method,
            headers,
            body:JSON.stringify(body)
        });

        if(!response.ok){
            throw new Error(`HTTP response error: ${response.status}`)
        }

        const data = await response.json();
        return data;
    } catch(err){
        console.error('Request failed', err)
    }
}

/**
 * API function for GET requests with optional query parameters and authorization token
 * @param endpoint 
 * @param queryParams 
 * @param token 
 * @returns 
 */
export const getApiCall = async(endpoint:string, queryParams?:Record<string, string>, token?:string) => {
    try{
        const queryString = new URLSearchParams(queryParams).toString();
        const url = queryString ? `${BASE_URL}/${endpoint}?${queryString}` : `${BASE_URL}/${endpoint}`;

        let headers:Record<string, string> = {}
        if(token) headers = {...headers, 'Authorization': `Bearer ${token}`}

        const response = await fetch(url, {
            method:"GET",
            headers
        });

        if (!response.ok) {
            throw new Error(`HTTP response error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Request failed', err);
    }
}

