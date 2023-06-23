export function header() {
    $("#header").append(`<nav class="navbar navbar-expand-sm  fixed-top">
 
<div class="collapse navbar-collapse nav-list" id="navbarNav">
    <img src="../img/580b57fcd9996e24bc43c529.png" alt="" height="85px">
    <ul class="navbar-nav  ">
        <li class="nav-item">
            <a class="nav-link " href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">TV Shows</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Movies</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="#">News & Popular</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="#">My List</a>
        </li>
    </ul>
</div>
<div class="icon">
    <i class="material-icons" style="font-size:30px">notifications_none</i>
    <i class="material-icons" style="font-size:30px">account_circle</i>
</div>
</nav>`)
}