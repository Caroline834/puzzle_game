function playMusic(){
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  }

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