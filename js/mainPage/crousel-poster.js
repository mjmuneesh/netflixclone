import { fetchPopular,fetchBollywood,fetchAction,fetchComedy,fetchhorror,fetchTvshows} from "../fetch.js";
import { DisplayPoster } from "../main/functions.js";
import { setDetails } from "../main/functions.js";

let popular = await fetchPopular().then(data=>data.results);
let Bollywood = await fetchBollywood().then(data=>data.results);
let Action = await fetchAction().then(data=>data.results);
let comedy = await fetchComedy().then(data=>data.results);
let horror = await fetchhorror().then(data=>data.results);
let Tvshows = await fetchTvshows().then(data=>data.results);

for (let item of popular){
   let [trailer,type,genres] = await setDetails(item)
   item.type= type;
   item.trailer = trailer;
   item.genres = genres;
}
for (let item of Bollywood){
    let [trailer,type,genres] = await setDetails(item)
   item.type= type;
   item.trailer = trailer;
   item.genres = genres;
}
for (let item of Action){
    let [trailer,type,genres] = await setDetails(item)
    item.type= type;
    item.trailer = trailer;
    item.genres = genres;
}
for (let item of comedy){
    let [trailer,type,genres] = await setDetails(item)
    item.type= type;
    item.trailer = trailer;
    item.genres = genres;
}
for (let item of horror){
    let [trailer,type,genres] = await setDetails(item)
    item.type= type;
    item.trailer = trailer;
    item.genres = genres;
}
for (let item of Tvshows){
    let [trailer,type,genres] = await setDetails(item)
    item.type= type;
    item.trailer = trailer;
    item.genres = genres;
}


export function createPoster(){
    for (let item of popular){
        DisplayPoster(item,1)
    }
    for (let item of Bollywood){
        DisplayPoster(item,2)
    }
    for (let item of Action){
        DisplayPoster(item,3)
    }
    for (let item of comedy){
        DisplayPoster(item,4)
    }
    for (let item of horror){
        DisplayPoster(item,5)
    }
    for (let item of Tvshows){
        DisplayPoster(item,6)
    }
}
