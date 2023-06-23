let users = JSON.parse(localStorage.getItem("users")) ?? [];
let userId= parseInt(localStorage.getItem("userId")) ?? 0;
let email = localStorage.getItem("Email");
$("#email").val(email);

$(".next").on("click", function () {
  if($("#pass").val()!=""){

    let emailid = $("#email").val();
    let password = $("#pass").val();
    let obj = {};
    obj.Email = emailid;
    obj.Password = password;
    obj.userId = userId;
    obj.FavMovie = [];
    obj.FavTv = [];
    obj.Liked = [];
    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userId", userId+1);
    window.location.href = "choosePlan.html";
  }else{
    $("#pass").focus();
  }
});
