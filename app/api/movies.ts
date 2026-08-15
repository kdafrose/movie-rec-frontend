
export const topRatedMovies = async() => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const access_token = import.meta.env.TMDB_ACCESS_TOKEN;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${access_token}`
    }
    };

    try{
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error(`HTTP response error: ${response.status}`)
        }

        const data = await response.json();
        return data;
    }catch(err){
        console.error('Request failed', err)
    }
}