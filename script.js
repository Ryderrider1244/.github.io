function sayHello(name){
    console.log("Hello " + name)
}

sayHello("Ryder");

const copyIP = document.getElementById("copyIP");

copyIP.addEventListener("click", function() {
    navigator.clipboard.writeText("play.sssh.net")
});

const offScreenMenu = document.querySelector(".off-screen-menu");
const hamIcon = document.querySelector(".ham-icon");

hamIcon.addEventListener("click", function() {
    offScreenMenu.classList.toggle("active")
});




