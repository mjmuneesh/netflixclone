import { onYouTubeIframeAPIReady } from "../main/youtube.js";
import { fetchPopular , fetchTrailer} from "../fetch.js";
import { trailerInfo } from "../main/trailerInfo.js";
import { owlCarousel } from "../main/owlCarousel.js";
import { createPoster } from "./crousel-poster.js";
import { header } from "../header.js";
import { footer } from "../footer.js";
import { HoverItem, showContent, info} from "../main/functions.js";

header();
footer();

$("body").scroll(function(){

    if ($("body").scrollTop()>=200){
        $(".navbar").css("background-color", "black")
    }else{
        $(".navbar").css("background-color", "transparent")
    }
})
let popular = await fetchPopular().then(data=>data.results)
var randomMovie = popular[Math.floor(Math.random()*popular.length)]
let trailer = await fetchTrailer(randomMovie.id).then(data=>data.results);
var randomTrailer = trailer[Math.floor(Math.random()*trailer.length)]
randomMovie.trailer=randomTrailer.key;

onYouTubeIframeAPIReady("MainTrailer",0,randomTrailer.key);
trailerInfo("logo",randomMovie);

createPoster();
owlCarousel(jQuery);

$(".crousel-section").on("mouseenter",".item", function(){
    let [id,trailer,type,genres,overview,name ] = $(this).attr("values").split(",");
    HoverItem(id,trailer,type,genres,overview,name);
    $(".hover-Item").css("top",$(this).offset().top- $(".crousel-section").offset().top-40)
    $(".hover-Item").css("left",$(this).offset().left- $(".crousel-section").offset().left-30)
})

$(".crousel-section").on("mouseleave",".hover-Item", function(){
    $(".hover-Item").remove();
});

$(document).on("click",".play", function(){

    let [id,trailer,type,genres ] = $(this).parent().attr("values").split(",");
    console.log(trailer);

    showContent(trailer);
});

$("#movieShow").on("click","#closeBtn", function(){
    $("#movieVideo").remove();
});

$(document).on("click",".details", function(){

    let [id,trailer,type,genres,overview,name] = $(this).parent().attr("values").split(",");

    info(id,trailer,type,genres,overview,name);
});

$("#Info-Movie").on("click","#closeBtn", function(){
    $("#MoreInfo").remove();
});
