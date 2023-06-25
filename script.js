let arr = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let currentplayer = "X";
let move = document.getElementsByClassName("box");
var steps = 1;
function checkwin() {
  for (let i = 0; i < 3; i++) {
    if (
      arr[i][0] === arr[i][1] &&
      arr[i][1] === arr[i][2] &&
      arr[i][1] === currentplayer
    )
      return true;
    if (
      arr[0][i] === arr[1][i] &&
      arr[1][i] === arr[2][i] &&
      arr[2][i] === currentplayer
    )
      return true;
  }

  if (
    arr[0][0] === arr[1][1] &&
    arr[1][1] === arr[2][2] &&
    arr[2][2] === currentplayer
  )
    return true;
  if (
    arr[0][2] === arr[1][1] &&
    arr[1][1] === arr[2][0] &&
    arr[2][0] === currentplayer
  )
    return true;
}

for (let k = 0; k < 3; k++) {
  for (let m = 0; m < 3; m++) {
    let i = k * 3 + m;
    {
      move[i].addEventListener("click", () => {
        if (arr[k][m] === "") arr[k][m] = currentplayer;
        console.log(arr[k][m]);
        move[i].innerHTML = currentplayer;
        if (checkwin()) {
          alert(currentplayer + " won !");
        }
        if (steps === 9) alert("tie");
        renew();
        //switching player
        currentplayer = currentplayer === "X" ? "O" : "X";
        steps++;
      });
    }
  }
}
function renew() {
  let reset = document.getElementById("reset");
  reset.addEventListener("click", () => {
    window.location.reload();
  
  });
}
