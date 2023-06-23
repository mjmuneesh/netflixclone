
$(".card1").addClass("scale");
$(".card1").find(".tick").addClass("activeColor")
$(".card").on("click",function(){
    $(".scale").removeClass("scale")
    $(".activeColor").removeClass("activeColor")
    $(".activeColor2").removeClass("activeColor2")
    $(".activeColor3").removeClass("activeColor3")
    $(".activeColor4").removeClass("activeColor4")
    $(this).addClass("scale")
    $(this).find(".tick").addClass("activeColor")
    $(this).find(".tick2").addClass("activeColor2")
    $(this).find(".tick3").addClass("activeColor3")
    $(this).find(".tick4").addClass("activeColor4")

})
$(".next").on("click",function(){
    window.location.href="signin.html"
})
