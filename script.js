// heading.classList.add("animated")
// setTimeout(() => {
//      console.log("source");
//      // document.querySelector("h1").classList.add("expand")

// }, 2000);

window.addEventListener("DOMContentLoaded", function () {
     var h1 = document.getElementById("page-title");
     h1.classList.add("expand");

});

window.addEventListener("DOMContentLoaded", () => {
     var name = document.getElementById("name")
     name.classList.add("expand")
})
window.addEventListener("DOMContentLoaded",()=>{
     var game = document.getElementById("game-mode")
     game.classList.add("expand")
})

let single = document.getElementById("one-player")
single.addEventListener('click',()=>{
     document.getElementById("real-game").classList.toggle("none")
     document.querySelector(".game").classList.add("none")
})
