document.getElementById("userInfoModal").setAttribute("style", "display:none");
document.getElementById("notificationInfoModal").setAttribute("style", "display:none");


let userButton = document.getElementById("user");
userButton.addEventListener("click", (e) => {
    if(document.getElementById("userInfoModal").style.display == "none"){
        document.getElementById("userInfoModal").style.display="block";
        document.getElementById("notificationInfoModal").style.display="none";
    }else{
        document.getElementById("userInfoModal").style.display="none";
    }
});

let notificationButton = document.getElementById("notification");
notificationButton.addEventListener("click", (e) => {
    if(document.getElementById("notificationInfoModal").style.display == "none"){
        document.getElementById("notificationInfoModal").style.display="block";
        document.getElementById("userInfoModal").style.display="none";
    }else{
        document.getElementById("notificationInfoModal").style.display="none";
    }
})