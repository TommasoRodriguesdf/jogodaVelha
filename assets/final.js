let socador1 = 'X';
let socador2 = 'O';
let velha =['','','','','','','','','',];

function setupGameBoard() {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
            alert('cliclou');
        if( i % 2 === 0 ){
            velha[i] = socador1;
          
        }else{
            velha[i] = socador2; 

        }
         combinacoisVidoria();
      });
    }
  }
setupGameBoard();



function combinacoisVidoria() {
  const squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = velha[i];
  }
  const combinacois = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

  for(let combinacou of combinacois) {
    const [a,b,c] = combinacou;

    if(velha[a] === velha[b] && velha[b] === velha[c]){
        alert("vense");
    }
}

}



