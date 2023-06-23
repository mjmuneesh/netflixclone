import { fetchTrailer, fetchTrailerTv, fetchTvDetails, fetchMovieDetails } from "../fetch.js"
import { onYouTubeIframeAPIReady } from "./youtube.js";

export async function setDetails(item) {

    let trailer;
    let genres;
    let genreList = [];
    let type = item.title ? "MOVIE" : "SERIES";

    if (type == "MOVIE") {
        trailer = await fetchTrailer(item.id).then(data => data.results)
        genres = await fetchMovieDetails(item.id).then(data => data.genres);

    } else {
        trailer = await fetchTrailerTv(item.id).then(data => data.results)
        genres = await fetchTvDetails(item.id).then(data => data.genres);
    }
    for (let item in genres) {
        genreList.push(genres[item].name)
    }
    genreList = genreList.join(" . ");

    var randomTrailer = trailer[Math.floor(Math.random() * trailer.length)];

    if (randomTrailer != undefined) {
        return [randomTrailer.key, type, genreList];
    }
    else { return ["", type, genreList] }
}

export function DisplayPoster(item, number) {
    setDetails(item)
    if (item.trailer) {
        let name = item.title? item.title: item.name;
        let values = [item.id, item.trailer, item.type, item.genres,item.overview.split(",").join(" "),name]

        $(`#slide-${number}`).append(`
        <div class="item" values = "${values}">
        <img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" alt="">
        </div>`)
    }

}

export function HoverItem(id, trailer, type, genres,overview,name) {

    $(".crousel-section").append(
        `<div class="hover-Item" values="${[id, trailer, type, genres,overview,name]}">
         <div class="HoverTrailer"> 
         <div id="HoverVideo"></div>
         </div>
         <i class="material-icons play" style="cursor:pointer">play_circle_outline</i>
         <i class="material-icons list" style="cursor:pointer">add_circle_outline</i>
         <i class="material-icons like" style="color:black; text-shadow: 0 0 2px #fff; cursor:pointer">thumb_up</i>
         <i class="material-icons details" style = "float: right; cursor:pointer">arrow_drop_down_circle</i>
         <p>${genres}</p>
    </div>`
    );

    onYouTubeIframeAPIReady("HoverVideo", 1, trailer)

}

export function showContent(trailer) {
    $("#movieShow").append(`
        <div class="container-fluid p-3" id="movieVideo">
            <i class="material-icons" id="closeBtn">close</i>
            <div id="displayVideo"></div>
            <div class="Options" id="2">
                <i class="material-icons play" style="cursor:pointer">play_arrow</i>
                <i class="material-icons volume" style="cursor:pointer">volume_off</i>
            </div>
           
        </div>`
    );
    onYouTubeIframeAPIReady("displayVideo",2, trailer);
}


export function info(id,trailer,type,genres,overview,name){
    $("#Info-Movie").append(`
    <div id="MoreInfo">
    <div class="video-container">
    <i class="material-icons" id="closeBtn">close</i>
        <div id="more-Trailer">
        
        </div>
        <div class="Options" id="3" values="${[id, trailer, type, genres]}">
            <p>${name}</p>
            <i class="material-icons play" style="cursor:pointer">play_arrow</i>
            <i class="material-icons list" style="cursor:pointer">add_circle_outline</i>
            <i class="material-icons like" style="color:black; text-shadow: 0 0 2px #fff; cursor:pointer">thumb_up</i>
            <i class="material-icons volume" style="cursor:pointer;float:right;">volume_off</i>
        </div>
        <p class="overview mt-5 text-white">
        ${overview}
        </p>
    </div>
    </div>
    `)
    onYouTubeIframeAPIReady("more-Trailer",3, trailer);
}