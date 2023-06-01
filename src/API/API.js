const API_key = 'e7687440bdfbb7ac1af00b49a855bc73'

const API = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=1`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_key}&language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_key}`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
    tvSeries: `https://api.themoviedb.org/3/tv/popular?api_key=${API_key}&language=en-US&page=1`
}


export default API