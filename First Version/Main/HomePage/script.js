/*Background animation square*/
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
/*Backgroung Music*/
function playMusic(){
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
}
function pauseMusic(){
  const audio = document.querySelector("audio");
    audio.pause();
}
/*Show Information */
function showTips(){
  swal({
    icon:"info",
    title: 'The rule of this game is need to drag and drop the broken image pieces to swap it.You need to swap them in a way that its forms the actual image.'
   })
}
/*Open New tab for Choose Mode Page */
function openModePage(){
  window.open("../ModePage/modeIndex.html","_blank");
  pauseMusic();
}
/*Exit from Choose Mode Page */
function closePage(){
  swal({
    title: "Are You Sure to quit?",
    text: "This page will be closed.",
    buttons:true,
    successMode:true,
  })
  .then((isOkay) =>{
    if(isOkay){
      window.parent.close();
    }
    else{
      window.location.reload();
    }
  });
}
