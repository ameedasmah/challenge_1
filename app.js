var boxes = Array.from(document.getElementsByClassName('box'));//its the array of 9 elements [];
const playText = document.getElementById('playText'); // to descripe the winner
const nulspaces=[];// it's for 9 el we will loop on it 
const restartBtn= document.getElementById('restartBtn') //to active restart key 
const O_P = "O";        //it's the O
const x_P = "X";       //it's the X 
let currentPlayer;    // it's the current player 

console.log(boxes);     // to show the array of 8 div
const drawBoard=()=>{   // it's the function to divided the area of the game
   

    boxes.forEach((box,i)=>{      // to loops in the boxes whos contains 8 elements
        let styleString = "";     //to make the border for the gameborde
    if (i < 3) {
      styleString += `border-bottom: 3px solid var(--purple);`;   // loop for the first two elements and make the border from the bottom 
    }
    if (i % 3 === 0) {
      styleString += `border-right: 3px solid var(--purple);`;//to make the border for elment number 3 and 6 from the right
    }
    if (i % 3 === 2) {
      styleString += `border-left: 3px solid var(--purple);`;// to make the border for the element number 8 from the rigt
    }
    if (i > 5) {
      styleString += `border-top: 3px solid var(--purple);`; // to make the border for every element greter than > 5 from to top
    }

    box.style = styleString;
    box.addEventListener('click',boxClicked)   

});
};
const boxClicked = (e) => {   // to active click  a
    // console.log('box Clicked');
    const id = e.target.id;
    console.log(id); // haha to check the id for every box
    if(!nulspaces[id]){   //if it's empty
        nulspaces[id]=currentPlayer; 
        e.target.innerText = currentPlayer;
        if(playerHasWon(currentPlayer)){
            playText.innerHTML = `${currentPlayer} wins!!`;
                // restart()
        return;
        }
        currentPlayer = currentPlayer === O_P ? x_P: O_P; // if the currentPlayer o change it to x else it should be o;
    }
};

//  e.target.innerText = currentPlayer;
const playerHasWon=()=>{    //to check the matching o and x with boxes
    if(nulspaces[0]===currentPlayer){
        if(nulspaces[1]===currentPlayer && nulspaces[2]===currentPlayer){
            console.log(`${currentPlayer} Congratulation you are the Winer`)
            return true;
        }
        if(nulspaces[3]===currentPlayer && nulspaces[6]===currentPlayer){
            console.log(`${currentPlayer} Congratulation you are the Winer `)
            return true;
        }
        if(nulspaces[4]===currentPlayer && nulspaces[8]===currentPlayer){
            console.log(`${currentPlayer} Congratulation you are the Winer`)
            return true;
        }
    }
    if (nulspaces[8] === currentPlayer) {
        if (nulspaces[2] === currentPlayer && nulspaces[5] === currentPlayer) {
          console.log(`${currentPlayer} Congratulation you are the Winer`);
          return true;
        }
        if (nulspaces[7] === currentPlayer && nulspaces[6] === currentPlayer) {
          console.log(`${currentPlayer} Congratulation you are the Winer`);
          return true;
        }
      }
      //from middle check middle vertical and middle horizontal
      if (nulspaces[4] === currentPlayer) {
        if (nulspaces[3] === currentPlayer && nulspaces[5] === currentPlayer) {
          console.log(`${currentPlayer} Congratulation you are the Winer`);
          return true;
        }
        if (nulspaces[2] === currentPlayer && nulspaces[6] === currentPlayer) {
            console.log(`${currentPlayer} Congratulation you are the Winer`);
            return true;
          }
        if (nulspaces[1] === currentPlayer && nulspaces[7] === currentPlayer) {
          console.log(`${currentPlayer} Congratulation you are the Winer`);
          return true;
        }
      }
}


const restart = ()=>{ // to reset the function
    nulspaces.forEach((space,i)=>{
        nulspaces[i]=null
    })
    boxes.forEach(box=>{
        box.innerText = '';
    })
    playText.innerText = `Let's Play!`;
    currentPlayer = O_P;
}
restartBtn.addEventListener('click',restart)
restart();
drawBoard();