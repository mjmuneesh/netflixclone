let id= document.getElementById("email1");
let btn= document.getElementById("Get-Started");
let valid1=false;

btn.addEventListener("click",function(){
    if (id.value.length==0 || !valid1){
        id.focus();
    }
    else{
        localStorage.setItem("Email",id.value)
        window.location="html/FinishSetup.html";
    }
});

var emailReg=/^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\\+/\?_`\{\}~]+))@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/

$("#email1").on("keyup",function(){
    if ($("#email1").val().length==0){
        $("#email1").css({ "border":"2px solid red" })
        valid1=false;
    }
    else if(!emailReg.test($("#email1").val())){
        $("#email1").css({ "border":"2px solid red" })
        valid1=false;
    }
    else{
        valid1=true;
        $("#email1").css({ "border":"2px solid green" })
    }
})
let id1= document.getElementById("email2");
let btn1= document.getElementById("btn");
let valid2=false;

btn1.addEventListener("click",function(){
    if (id1.value.length==0 || !valid2){
        id1.focus();
    }
    else{
        localStorage.setItem("Email",id1.value)
        window.location="getstarted.html";
    }
});

$("#email2").on("keyup",function(){
    if ($("#email2").val().length==0){
        $("#email2").css({ "border":"2px solid red" })
        valid2=false;
    }
    else if(!emailReg.test($("#email2").val())){
        $("#email2").css({ "border":"2px solid red" })
        valid2=false;
    }
    else{
        valid2=true;
        $("#email2").css({ "border":"2px solid green" })
    }
})
