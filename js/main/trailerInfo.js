export function trailerInfo(container, movie) {
    let type = movie.title?"MOVIE":"SERIES";
    let name = movie.title?movie.title:movie.name;

    $(`.${container}`).append(`
    <img id="img1"src="../img/Netflix-N-Symbol-logo.png" alt="">${type}
    <br>
    <div id="0" values="${[movie.id,movie.trailer]}">
     <h3>${name}</h3>
     <br>
     <p>Watch ${name}</p>
     <p id="overview">
         ${movie.overview}
     </p>
         <button id="btn1" class="play" ">
            <i class="fa fa-play" style="font-size:15px"></i>Play
         </button>
         <button id="btn2"><i class="material-icons" style="font-size:15px">info_outline</i>More Info</button>
         <i class="material-icons volume" style="float:right; cursor:pointer">volume_off</i>
    </div>
    `)
};
