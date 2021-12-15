let elMainBtn = document.querySelector('.tic__btns');
let arr = [];

for(let i = 1;i <= 3;i++) {
  for(let j = 1; j <= 3;j++) {
    let obj = {
      y:i,
      x:j
    }
    arr.push(obj)
  }
}
for(let card in arr) {
  let ticBtn = document.createElement('button');
  ticBtn.className = `tic__btn ${arr[card].y} ${arr[card].x}`
  let iconx = document.createElement('i');
  iconx.className = "tic__x fas fa-times";
  let iconround = document.createElement('i');
  iconround.className = "tic__round far fa-circle";
  ticBtn.appendChild(iconx);
  ticBtn.appendChild(iconround);
  elMainBtn.appendChild(ticBtn);
}

let elBtn = document.querySelectorAll('.tic__btn');
let count = 0
let count1 = 1

for(let button of elBtn) {
  button.addEventListener("click", (e) => {
    if(e.target.firstChild.className = "tic__x fas fa-times") {
      e.target.style.backgroundColor = "#E67258"
      e.target.firstChild.style.opacity = "1";
      e.target.style.display = "block"
    }
  })
}


// const x = "tic__x fas fa-times";
// const round = "tic__round far fa-circle";
// let currentTurn
// elBtn.forEach(cell => {
//   cell.addEventListener('click', handleClick) 
// })
// // function handleClick(e) {
//   const cell = e.target 
//   const currentClass = currentTurn ? round : x
//   placeMark(cell,currentClass)
//   swapTurns()
// }

// function placeMark(cell,currentClass) {
//   let i = document.createElement('i');
//   i.className = currentClass;
//   let i1 = document.createElement('i');
//   i1.className = currentClass
//   cell.appendChild(i)
//   cell.appendChild(i1)
// }
// function swapTurns() {
//   currentTurn = !currentTurn
// }