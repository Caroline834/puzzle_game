/*window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });*/
  function createSquare(){
    let section = document.querySelector('section');
    let square = document.createElement('span');

    var size = Math.random()* 50;

    square.style.width = size + 'px';
    square.style.height = size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

section.appendChild(square);

setTimeout(() => {
square.remove()
}, 7000);
}
setInterval(createSquare, 150)

function playMusic(){
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
}

function showTips(){
  swal({
    icon:"info",
    title: 'Image Puzzle is a photo puzzle game that requires assemblage of interlocking photo pieces. Release stress, relax brain, indulge yourself and share photo puzzle fun with friends and family by playing this game. ',

   })
}