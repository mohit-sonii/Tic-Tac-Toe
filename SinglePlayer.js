
let turn0 = true;
const winPat = [
     [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
let buttons = document.querySelector(".nine-button").children

Array.from(buttons).forEach((e) => {
     e.addEventListener("click", () => {
          if (turn0) {
               // e.classList.remove="darken-text"
               e.innerHTML = "0"
               // e.style.color = "#ffc2d1"
               e.style.color = "#ffc8dd"
               turn0 = false
          }
          else {
               e.innerHTML = "X"
               e.style.color = "#fff"
               turn0 = true
          }
          e.disabled = true
          win()
     })
})
// console.log(pattern[0], pattern[1], pattern[2]);
// console.log(
//      buttons[pattern[0]].innerText, 
//      buttons[pattern[1]].innerText, 
//      buttons[pattern[2]].innerText);

const win = () => {
     for (let pattern of winPat) {
          let pos1val = buttons[pattern[0]].innerText
          let pos2val = buttons[pattern[1]].innerText
          let pos3val = buttons[pattern[2]].innerText

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
               }
          }
     }
}
const reset = document.getElementById("reset")
reset.addEventListener("click", () => {
     resetGame()

})
const resetGame = () => {
     turn0 = true;
     // if (buttons.style.opacity === '0') {
     //      buttons.style.opacity = '1'
     // }
     // else {
     //      buttons.style.opacity = '0'
     // }
     for (let box of buttons) {
          box.innerHTML = ""
          box.disabled = false
     }
}
