let jogador = 'X';
let velha =['','','','','','','','','' ];
function comesardinovo(){
const squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
  velha = ['','','','','','','','','' ];

}
function combinacoisVidoria() {
  const squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = velha[i];
  }
  const combinacois = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

  for(let combinacou of combinacois) {
    const [a,b,c] = combinacou;

    if(velha[a] === velha[b] && velha[b] === velha[c] && velha[a]){
        alert("vence");
        comesardinovo();        
    }
  }
}
function trocajogador(){
jogador= jogador === 'X' ? 'O' : 'X';   
}

function velevicadorVelha(){
    if( !velha.includes('')){
        alert('Deu velha');
        comesardinovo();      
    }
  }


function setupGameBoard() {
  const squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function() {
       velha[i] = jogador;
           trocajogador();
           velevicadorVelha();
       combinacoisVidoria();
    });
  }
}
setupGameBoard();
