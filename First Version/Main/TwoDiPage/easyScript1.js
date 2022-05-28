var rows = 2;
var columns = 2;
var curTile1,curTile2,curTile3,curTile4;
var otherTile1,otherTile2,otherTile3,otherTile4;
var moves = 0;
var sec = 0;
var durations;
/*Initialize Arrays for each easy images*/
let squirandomImgOrder= [];
let chickenrandomImgOrder= [];
let fishrandomImgOrder= [];
let puppyrandomImgOrder= [];
/*ClassName*/
let squi_imgs = document.getElementsByClassName("images1");
let chicken_imgs = document.getElementsByClassName("images2");
let fish_imgs = document.getElementsByClassName("images3");
let puppy_imgs = document.getElementsByClassName("images4");
/*Play Music*/
function playMusic(){
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
}
/*Original Easy images order*/
var squi_e_imgOrder = [
    "animal/ani_e_img/squirrel/ani_squi_e11",
    "animal/ani_e_img/squirrel/ani_squi_e12",
    "animal/ani_e_img/squirrel/ani_squi_e21",
    "animal/ani_e_img/squirrel/ani_squi_e22"];
var chicken_e_imgOrder = [
    "animal/ani_e_img/chicken/ani_chicken_e11",
    "animal/ani_e_img/chicken/ani_chicken_e12",
    "animal/ani_e_img/chicken/ani_chicken_e21",
    "animal/ani_e_img/chicken/ani_chicken_e22"];
var fish_e_imgOrder = [
    "animal/ani_e_img/fish/ani_fish_e11",
    "animal/ani_e_img/fish/ani_fish_e12",
    "animal/ani_e_img/fish/ani_fish_e21",
    "animal/ani_e_img/fish/ani_fish_e22"];
var puppy_e_imgOrder = [
    "animal/ani_e_img/puppy/ani_puppy_e11",
    "animal/ani_e_img/puppy/ani_puppy_e12",
    "animal/ani_e_img/puppy/ani_puppy_e21",
    "animal/ani_e_img/puppy/ani_puppy_e22"];

var squi_e_imgOrder2 = [
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/squirrel/ani_squi_e11.jpg",
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/squirrel/ani_squi_e12.jpg",
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/squirrel/ani_squi_e21.jpg",
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/squirrel/ani_squi_e22.jpg"]; 

var chicken_e_imgOrder2 = [
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/chicken/ani_chicken_e11.jpg",
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/chicken/ani_chicken_e12.jpg",
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/chicken/ani_chicken_e21.jpg",
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/chicken/ani_chicken_e22.jpg"]; 

var fish_e_imgOrder2 = [
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/fish/ani_fish_e11.jpg",
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/fish/ani_fish_e12.jpg",
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/fish/ani_fish_e21.jpg",
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/fish/ani_fish_e22.jpg"]; 

var puppy_e_imgOrder2 = [
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/puppy/ani_puppy_e11.jpg",
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/puppy/ani_puppy_e12.jpg",
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/puppy/ani_puppy_e21.jpg",
    "http://127.0.0.1:5501/Main/TwoDiPage/animal/ani_e_img/puppy/ani_puppy_e22.jpg"]; 
            
/*Random*/
squirandomImgOrder = squi_e_imgOrder.sort(() => 0.3 - Math.random());
chickenrandomImgOrder = chicken_e_imgOrder.sort(() => 0.3 - Math.random());
fishrandomImgOrder = fish_e_imgOrder.sort(() => 0.3 - Math.random());
puppyrandomImgOrder = puppy_e_imgOrder.sort(() => 0.3 - Math.random());

/*Four Start Game */
function e_start_game1(){
    playMusic();
    //playPause();
    for(let r = 0; r < rows ;r++)
    {
        for(let c = 0 ; c< columns ; c++)
        {
            //img id="0-0"
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("images1");
            console.log("tile id "+tile.id);
            tile.src = squirandomImgOrder.shift() + ".jpg";
            console.log("tile src " + tile.src);

            //drag functionality
            tile.addEventListener("dragstart",dragStart1);//click an image to drag
            tile.addEventListener("dragover",dragOver);//moving image around while click
            tile.addEventListener("dragenter",dragEnter);//dragging image onto another one
            tile.addEventListener("dragleave",dragLeave);//dragged image leaving another image
            tile.addEventListener("drop",dragDrop1);//drag an image over another image,drop the image
            tile.addEventListener("dragend",dragEnd1);//after drag drop

            document.getElementById("easy_board").append(tile);
        }
    }
        var display = document.getElementById("record_duration");
            function count(){
                //sec = sec + 1 ;
                display.innerHTML = "Times :"+ sec +"sec";
                sec++;
            }
            durations = setInterval(count,1000);
}
function e_start_game2(){
    playMusic();
    for(let r = 0; r < rows ;r++)
    {
        for(let c = 0 ; c< columns ; c++)
        {
            //img id="0-0"
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("images2");
            console.log("tile id "+tile.id);
            tile.src = chickenrandomImgOrder.shift() + ".jpg";
            console.log("tile src " + tile.src);

            //drag functionality
            tile.addEventListener("dragstart",dragStart2);//click an image to drag
            tile.addEventListener("dragover",dragOver);//moving image around while click
            tile.addEventListener("dragenter",dragEnter);//dragging image onto another one
            tile.addEventListener("dragleave",dragLeave);//dragged image leaving another image
            tile.addEventListener("drop",dragDrop2);//drag an image over another image,drop the image
            tile.addEventListener("dragend",dragEnd2);//after drag drop

            document.getElementById("easy_board").append(tile);
        }
    }
        var display = document.getElementById("record_duration");
            function count(){
                //sec = sec + 1 ;
                display.innerHTML = "Times :"+ sec +"sec";
                sec++;
            }
            durations = setInterval(count,1000);
}

function e_start_game3(){
    playMusic();
    for(let r = 0; r < rows ;r++)
    {
        for(let c = 0 ; c< columns ; c++)
        {
            //img id="0-0"
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("images3");
            console.log("tile id "+tile.id);
            tile.src = fishrandomImgOrder.shift() + ".jpg";
            console.log("tile src " + tile.src);

            //drag functionality
            tile.addEventListener("dragstart",dragStart3);//click an image to drag
            tile.addEventListener("dragover",dragOver);//moving image around while click
            tile.addEventListener("dragenter",dragEnter);//dragging image onto another one
            tile.addEventListener("dragleave",dragLeave);//dragged image leaving another image
            tile.addEventListener("drop",dragDrop3);//drag an image over another image,drop the image
            tile.addEventListener("dragend",dragEnd3);//after drag drop

            document.getElementById("easy_board").append(tile);
        }
    }
        var display = document.getElementById("record_duration");
            function count(){
                //sec = sec + 1 ;
                display.innerHTML = "Times :"+ sec +"sec";
                sec++;
            }
            durations = setInterval(count,1000);
}
function e_start_game4(){
    playMusic();
    for(let r = 0; r < rows ;r++)
    {
        for(let c = 0 ; c< columns ; c++)
        {
            //img id="0-0"
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("images4");
            console.log("tile id "+tile.id);
            tile.src = puppyrandomImgOrder.shift() + ".jpg";
            console.log("tile src " + tile.src);

            //drag functionality
            tile.addEventListener("dragstart",dragStart4);//click an image to drag
            tile.addEventListener("dragover",dragOver);//moving image around while click
            tile.addEventListener("dragenter",dragEnter);//dragging image onto another one
            tile.addEventListener("dragleave",dragLeave);//dragged image leaving another image
            tile.addEventListener("drop",dragDrop4);//drag an image over another image,drop the image
            tile.addEventListener("dragend",dragEnd4,);//after drag drop

            document.getElementById("easy_board").append(tile);
        }
    }
        var display = document.getElementById("record_duration");
            function count(){
                //sec = sec + 1 ;
                display.innerHTML = "Times :"+ sec +"sec";
                sec++;
            }
            durations = setInterval(count,1000);
}
/*For Drag Event */
function dragStart1(){
    curTile1 = this;
    //this refers to the image tile being dragged
}
function dragStart2(){
    curTile2 = this;
    //this refers to the image tile being dragged
}
function dragStart3(){
    curTile3 = this;
    //this refers to the image tile being dragged
}
function dragStart4(){
    curTile4 = this;
    //this refers to the image tile being dragged
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(e){
    
}
function dragDrop1(){
    otherTile1 = this;
}
function dragDrop2(){
    otherTile2 = this;
}
function dragDrop3(){
    otherTile3 = this;
}
function dragDrop4(){
    otherTile4 = this;
}
function dragEnd1(){
    /*if(!otherTile.src.includes("natureImg/ne_imgs/blank.png")){ //swap only if blankimage
        return;
    }*/
    let currCoords1;/*currCoords2,currCoords3,currCoords4;*/
    let otherCoords1;/*otherCoords2,otherCoords3,otherCoords4;*/

    /*For Squi animal*/
    currCoords1 = curTile1.id.split("-");//0-0,0-1
    let squi_r1 = parseInt(currCoords1[0]);//0
    let squi_c1 = parseInt(currCoords1[1]);//0

    otherCoords1 = otherTile1.id.split("-");
    let squi_r2 = parseInt(otherCoords1[0]);//0
    let squi_c2 = parseInt(otherCoords1[1]);//1

    let moveLeft1 = squi_r1 == squi_r2 && squi_c2 == squi_c1-1;
    let moveRight1 = squi_r1 == squi_r2 && squi_c2 == squi_c1+1;
    let moveUp1 = squi_c1 == squi_c2 && squi_r2 == squi_r1-1;
    let moveDown1 = squi_c1 == squi_c2 && squi_r2 == squi_r1+1;

    let isAdjacent1 = moveLeft1 || moveRight1 || moveUp1 || moveDown1 ;
    
    if(isAdjacent1){
        let squi_currImg = curTile1.src;//0
        let squi_otherImg = otherTile1.src;//1
        curTile1.src = squi_otherImg;
        otherTile1.src = squi_currImg;
        moves +=1;
        document.getElementById("record_moves").innerHTML = "Moves:"+ moves;
}
let win1 = true;
    for (let index = 0; index < squi_imgs.length; index++) {
        if(squi_imgs[index].src !== squi_e_imgOrder2[index]){
            win1 = false;
        }
    }
    if (win1) {
        document.getElementById("gameWin").play();
        document.getElementById("easy_board").style.pointerEvents="none";
        Swal.fire({
            title: 'Congratulation!',
            text: "You Win!",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: 'lightgreen',
            confirmButtonText: 'Choose Another Picture',
            cancelButtonColor :"#987463",
            cancelButtonText: 'Play Again!',
        }).then((result) => {
            if (result.isConfirmed) {
            location = "../ModePage/easyModeIndex.html"
            }
            else{
                location = "../TwoDiPage/easyIndex1.html"
            }
        })
        clearInterval(durations);
    }
}
function dragEnd2() {
    currCoords2 = curTile2.id.split("-");
    let chicken_r1 = parseInt(currCoords2[0]);
    let chicken_c1 = parseInt(currCoords2[1]);

    otherCoords2 = otherTile2.id.split("-");
    let chicken_r2 = parseInt(otherCoords2[0]);
    let chicken_c2 = parseInt(otherCoords2[1]);

    let moveLeft2 = chicken_r1 == chicken_r2 && chicken_c2 == chicken_c1-1;
    let moveRight2 = chicken_r1== chicken_r2 && chicken_c2== chicken_c1+1;
    let moveUp2 = chicken_c1== chicken_c2 && chicken_r2 == chicken_r1-1;
    let moveDown2 = chicken_c1== chicken_c2 && chicken_r2== chicken_r1+1;
    let isAdjacent2 = moveLeft2 || moveRight2 || moveUp2 || moveDown2 ;
    if(isAdjacent2){
        let chicken_currImg = curTile2.src;
        let chicken_otherImg = otherTile2.src;
        curTile2.src = chicken_otherImg;
        otherTile2.src = chicken_currImg;
        moves +=1;
        document.getElementById("record_moves").innerHTML = "Moves:"+ moves;
    }  
    let win2 = true;
    for (let index = 0; index < chicken_imgs.length; index++) {
        if(chicken_imgs[index].src !== chicken_e_imgOrder2[index]){
            win2 = false;
        }
    }
    if (win2) {
        document.getElementById("gameWin").play();
        document.getElementById("easy_board").style.pointerEvents="none";
        Swal.fire({
            title: 'Congratulation!',
            text: "You Win!",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: 'lightgreen',
            confirmButtonText: 'Choose Another Picture',
            cancelButtonColor :"#987463",
            cancelButtonText: 'Play Again!',
        }).then((result) => {
            if (result.isConfirmed) {
            location = "../ModePage/easyModeIndex.html"
            }
            else{
                location = "../TwoDiPage/easyIndex2.html"
            }
        })

        clearInterval(durations);
    }
}

function dragEnd3(){
    currCoords3 = curTile3.id.split("-");
let f_r1 = parseInt(currCoords3[0]);
let f_c1 = parseInt(currCoords3[1]);

otherCoords3 = otherTile3.id.split("-");
let f_r2 = parseInt(otherCoords3[0]);
let f_c2 = parseInt(otherCoords3[1]);

let moveLeft3 = f_r1 == f_r2 && f_c2 == f_c1-1;
let moveRight3 = f_r1== f_r2 && f_c2== f_c1+1;
let moveUp3 = f_c1== f_c2 && f_r2 == f_r1-1;
let moveDown3 = f_c1== f_c2 && f_r2== f_r1+1;
let isAdjacent3 = moveLeft3 || moveRight3 || moveUp3 || moveDown3 ;
if(isAdjacent3){
    let f_currImg = curTile3.src;
    let f_otherImg = otherTile3.src;
    curTile3.src = f_otherImg;
    otherTile3.src = f_currImg;
    moves +=1;
    document.getElementById("record_moves").innerHTML = "Moves:"+ moves;
}
let win3 = true;
for (let index = 0; index < fish_imgs.length; index++) {
    if(fish_imgs[index].src !== fish_e_imgOrder2[index]){
        win3 = false;
    }
}
if (win3) {
    document.getElementById("gameWin").play();
    document.getElementById("easy_board").style.pointerEvents="none";
    Swal.fire({
        title: 'Congratulation!',
        text: "You Win!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: 'lightgreen',
        confirmButtonText: 'Choose Another Picture',
        cancelButtonColor :"#987463",
        cancelButtonText: 'Play Again!',
    }).then((result) => {
        if (result.isConfirmed) {
        location = "../ModePage/easyModeIndex.html"
        }
        else{
            location = "../TwoDiPage/easyIndex3.html"
        }
    })
    clearInterval(durations);
}

}  

function dragEnd4(){
    currCoords4 = curTile4.id.split("-");
    let p_r1 = parseInt(currCoords4[0]);
    let p_c1 = parseInt(currCoords4[1]);
    
    otherCoords4 = otherTile4.id.split("-");
    let p_r2 = parseInt(otherCoords4[0]);
    let p_c2 = parseInt(otherCoords4[1]);
    
    let moveLeft4 = p_r1 == p_r2 && p_c2 == p_c1-1;
    let moveRight4 = p_r1== p_r2 && p_c2== p_c1+1;
    let moveUp4 = p_c1== p_c2 && p_r2 == p_r1-1;
    let moveDown4 = p_c1== p_c2 && p_r2== p_r1+1;
    let isAdjacent4 = moveLeft4 || moveRight4 || moveUp4 || moveDown4 ;
    if(isAdjacent4){
        let p_currImg = curTile4.src;
        let p_otherImg = otherTile4.src;
        curTile4.src = p_otherImg;
        otherTile4.src = p_currImg;
        moves +=1;
        document.getElementById("record_moves").innerHTML = "Moves:"+ moves;
    }
        let win4 = true;
        for (let index = 0; index < puppy_imgs.length; index++) {
            if(puppy_imgs[index].src !== puppy_e_imgOrder2[index]){
                win4 = false;
            }
        }
        if (win4) {
            document.getElementById("gameWin").play();
            document.getElementById("easy_board").style.pointerEvents="none";
            Swal.fire({
                title: 'Congratulation!',
                text: "You Win!",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: 'lightgreen',
                confirmButtonText: 'Choose Another Picture',
                cancelButtonColor :"#987463",
                cancelButtonText: 'Play Again!',
            }).then((result) => {
                if (result.isConfirmed) {
                location = "../ModePage/easyModeIndex.html"
                }
                else{
                    location = "../TwoDiPage/easyIndex4.html"
                }
            });
            clearInterval(durations);
        }
}

