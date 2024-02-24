let sinPlayer = false
var turn0 = true

const winPat = [
     [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
let buttons = document.querySelector(".nine-button").children


window.addEventListener("DOMContentLoaded", function () {
     var h1 = document.getElementById("page-title");
     h1.classList.add("expand");

});

window.addEventListener("DOMContentLoaded", () => {
     var name = document.getElementById("name")
     name.classList.add("expand")
})
window.addEventListener("DOMContentLoaded", () => {
     var game = document.getElementById("game-mode")
     game.classList.add("expand")
})

let double = document.getElementById("two-player")
double.addEventListener('click', () => {
     document.getElementById("real-game").classList.toggle("none")
     document.querySelector(".game").classList.add("none")
})
let single = document.getElementById("one-player")
single.addEventListener("click", () => {
     document.getElementById("real-game").classList.toggle("none")
     document.querySelector(".game").classList.add("none")
     sinPlayer = true

})
const reset = document.getElementById("reset")
reset.addEventListener("click", () => {
     resetGame()

})
const resetGame = () => {
     turn0 = true;
     for (let box of buttons) {
          box.innerHTML = ""
          box.disabled = false
     }
}

const back = document.getElementById("back")
back.addEventListener("click", () => {
     resetGame()
     goBack()
})

const goBack = () => {
     document.getElementById("real-game").classList.toggle("none")
     document.querySelector(".game").classList.remove("none")
}
const win = () => {
     for (let pattern of winPat) {
          var pos1val = buttons[pattern[0]].innerText
          var pos2val = buttons[pattern[1]].innerText
          var pos3val = buttons[pattern[2]].innerText
          if (pos1val != "" && pos2val != "" && pos3val != "") {
               if (pos1val === pos2val && pos2val === pos3val) {
                    for (const box of buttons) {
                         box.disabled = true
                    }
                    for (let i = 0; i < buttons.length; i++) {
                         if (buttons[i].innerText !== pos1val && buttons[i].innerText !== "") {
                              buttons[i].style.color = "#0d1b2a";
                         }
                    }
                    Swal.fire({
                         title: `Player ${pos1val} wins!`,
                         confirmButtonText: 'Reset Game'
                    }).then((result) => {
                         if (result.isConfirmed) {
                              resetGame()
                         }
                    })
               }
          }
     }
}

Array.from(buttons).forEach((e) => {
     e.addEventListener("click", () => {
          if (turn0) {
               if (sinPlayer) {
                    e.innerHTML = "0"
                    e.style.color = "#ffc8dd"
                    document.getElementById("think").style.opacity='1'
                    setTimeout(() => {
                         autoNext()
                    }, 1000);
               } else {
                    e.innerHTML = "0"
                    e.style.color = "#ffc8dd"
               }
               turn0 = false;
          } else {

               e.innerHTML = "X"
               e.style.color = "#fff"
               turn0 = true;
          }
          e.disabled = true;
          win();
     })
})

function autoNext() {
     let emptyBox = Array.from(buttons).filter(button => button.innerText == "")
     document.getElementById("think").style.opacity="0"
     if (!turn0 && emptyBox.length > 0) {
          let num = Math.floor(Math.random() * emptyBox.length)
          console.log(num);
          if (emptyBox[num].innerText == "") {
               emptyBox[num].innerHTML = 'X'
               emptyBox[num].style.color = "#fff"
               emptyBox[num].disabled = true;
               turn0 = true
               win()
          }
     }
     if(emptyBox === 0){
          Swal.fire({
               title: `Draw`,
               showCancelButton: true,
               confirmButtonText: 'Reset Game'
          }).then((result) => {
               if (result.isConfirmed) {
                    resetGame()
               }
               else if(result.dismiss === Swal.DismissReason.cancel){
                    goBack()
               }
          })
     }
}