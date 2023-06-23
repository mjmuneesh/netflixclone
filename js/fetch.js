let key= "4295fc32f8fa588e9949ddb3a675a86a";
export async function fetchPopular(){
    const popular = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`);
    return popular.json();
}
export async function fetchBollywood(){
    const Bollywood = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&with_origin_country=IN&with_original_language=hi`);
    return Bollywood.json();
}
export async function fetchAction(){
    const Action = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`);
    return Action.json();
}
export async function fetchTrailer(id){
    const trailer = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`);
    return trailer.json();
}
export async function fetchTrailerTv(id){
    const trailer = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}`);
    return trailer.json();
}
export async function fetchComedy(){
    const trailer = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`);
    return trailer.json();
}
export async function fetchhorror(){
    const trailer = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`);
    return trailer.json();
}
export async function fetchTvshows(){
    const trailer = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=16`);
    return trailer.json();
}
export async function fetchTvDetails(id){
    const trailer = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&with_genres=16`);
    return trailer.json();
}
export async function fetchMovieDetails(id){
    const trailer = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&with_genres=16`);
    return trailer.json();
}

