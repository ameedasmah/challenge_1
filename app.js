var boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
const nulspaces=[null,null,null,null,null,null,null,null,null]
const O_P = "O";
const x_P = "X";
let currentPlayer = O_P

console.log(boxes);
const drawBoard=()=>{
   

    boxes.forEach((box,i)=>{
        let styleString = "";
    if (i < 3) {
      styleString += `border-bottom: 3px solid var(--purple);`;
    }
    if (i % 3 === 0) {
      styleString += `border-right: 3px solid var(--purple);`;
    }
    if (i % 3 === 2) {
      styleString += `border-left: 3px solid var(--purple);`;
    }
    if (i > 5) {
      styleString += `border-top: 3px solid var(--purple);`;
    }

    box.style = styleString;
    box.addEventListener('click',boxClicked)

});
};
const boxClicked = (e) => {
    // console.log('box Clicked');
    const id = e.target.id;
    console.log(id);
    if(!nulspaces[id]){
        nulspaces[id]=currentPlayer;
        e.target.innerText = currentPlayer;
        if(playerHasWon(currentPlayer)){
            playText.innerHTML = `${currentPlayer} wins!!`;
        return;
        }
        currentPlayer = currentPlayer === O_P ? x_P: O_P;
    }
};

//  e.target.innerText = currentPlayer;
const playerHasWon=()=>{
    if(nulspaces[0]===currentPlayer){
        if(nulspaces[1]===currentPlayer && nulspaces[2]===currentPlayer){
            alert(`${currentPlayer} Congratulation you are the Winer`)
            return true;
        }
        if(nulspaces[3]===currentPlayer && nulspaces[6]===currentPlayer){
            alert(`${currentPlayer} Congratulation you are the Winer `)
            return true;
        }
        if(nulspaces[4]===currentPlayer && nulspaces[8]===currentPlayer){
            alert(`${currentPlayer} Congratulation you are the Winer`)
            return true;
        }
    }
    if (nulspaces[8] === currentPlayer) {
        if (nulspaces[2] === currentPlayer && nulspaces[5] === currentPlayer) {
          alert(`${currentPlayer} Congratulation you are the Winer`);
          return true;
        }
        if (nulspaces[7] === currentPlayer && nulspaces[6] === currentPlayer) {
          alert(`${currentPlayer} Congratulation you are the Winer`);
          return true;
        }
      }
      //from middle check middle vertical and middle horizontal
      if (nulspaces[4] === currentPlayer) {
        if (nulspaces[3] === currentPlayer && nulspaces[5] === currentPlayer) {
          alert(`${currentPlayer} Congratulation you are the Winer`);
          return true;
        }
        if (nulspaces[1] === currentPlayer && nulspaces[7] === currentPlayer) {
          alert(`${currentPlayer} Congratulation you are the Winer`);
          return true;
        }
      }
}
drawBoard();

