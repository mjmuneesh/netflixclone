
let users = JSON.parse(localStorage.getItem("users"));

let user_id = "";

$("#signIn").hide();

$("#signup").on("click", () => {
  window.location.href = base_url;
});

$("#signInPage").on("click", () => {
  let valid = false;
  if (users != null) {
    let email = $("#email").val();
    let password = $("#password").val();
    for (let user of users) {
      if (user["Email"] == email && user["Password"] == password) {
        valid = true;
        user_id = user.user_id;
        break;
      }
    }
  }

  if (valid) {
    sessionStorage.setItem("user_id", user_id);
    window.location.href = "../html/MainPage.html";
  } else {
    $(".error").show();
    $("#password").val("");
  }
});
