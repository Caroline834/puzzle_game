var rows = 4;
var columns = 4;
var curTile1,curTile2,curTile3,curTile4;
var otherTile1,otherTile2,otherTile3,otherTile4;
var moves = 0;
var sec = 0;
var durations;
/*Initialize Arrays for each easy images*/
let applerandomImgOrder= [];
let berryrandomImgOrder= [];
let limerandomImgOrder= [];
let strawrandomImgOrder= [];
/*Play Music*/
function playMusic(){
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
}
/*ClassName*/
let apple_imgs = document.getElementsByClassName("images1");
let berry_imgs = document.getElementsByClassName("images2");
let lime_imgs = document.getElementsByClassName("images3");
let straw_imgs = document.getElementsByClassName("images4");
/*Original Easy images order*/
var apple_h_imgOrder = [
    "fruit/apple/fruit_apple_h11",
    "fruit/apple/fruit_apple_h12",
    "fruit/apple/fruit_apple_h13","fruit/apple/fruit_apple_h14",
    "fruit/apple/fruit_apple_h21",
    "fruit/apple/fruit_apple_h22",
    "fruit/apple/fruit_apple_h23","fruit/apple/fruit_apple_h24",
    "fruit/apple/fruit_apple_h31",
    "fruit/apple/fruit_apple_h32",
    "fruit/apple/fruit_apple_h33","fruit/apple/fruit_apple_h34",
    "fruit/apple/fruit_apple_h41",
    "fruit/apple/fruit_apple_h42",
    "fruit/apple/fruit_apple_h43","fruit/apple/fruit_apple_h44"];
var berry_h_imgOrder = [
    "fruit/berry/fruit_berry_h11",
    "fruit/berry/fruit_berry_h12",
    "fruit/berry/fruit_berry_h13","fruit/berry/fruit_berry_h14",
    "fruit/berry/fruit_berry_h21",
    "fruit/berry/fruit_berry_h22",
    "fruit/berry/fruit_berry_h23","fruit/berry/fruit_berry_h24",
    "fruit/berry/fruit_berry_h31",
    "fruit/berry/fruit_berry_h32",
    "fruit/berry/fruit_berry_h33","fruit/berry/fruit_berry_h34",
    "fruit/berry/fruit_berry_h41",
    "fruit/berry/fruit_berry_h42",
    "fruit/berry/fruit_berry_h43","fruit/berry/fruit_berry_h44"];
var lime_h_imgOrder = [
    "fruit/lime/fruit_lime_h11",
    "fruit/lime/fruit_lime_h12",
    "fruit/lime/fruit_lime_h13","fruit/lime/fruit_lime_h14",
    "fruit/lime/fruit_lime_h21",
    "fruit/lime/fruit_lime_h22",
    "fruit/lime/fruit_lime_h23","fruit/lime/fruit_lime_h24",
    "fruit/lime/fruit_lime_h31",
    "fruit/lime/fruit_lime_h32",
    "fruit/lime/fruit_lime_h33","fruit/lime/fruit_lime_h34",
    "fruit/lime/fruit_lime_h41",
    "fruit/lime/fruit_lime_h42",
    "fruit/lime/fruit_lime_h43","fruit/lime/fruit_lime_h44"];
var straw_h_imgOrder = [
    "fruit/straw/fruit_straw_h11",
    "fruit/straw/fruit_straw_h12",
    "fruit/straw/fruit_straw_h13","fruit/straw/fruit_straw_h14",
    "fruit/straw/fruit_straw_h21",
    "fruit/straw/fruit_straw_h22",
    "fruit/straw/fruit_straw_h23","fruit/straw/fruit_straw_h24",
    "fruit/straw/fruit_straw_h31",
    "fruit/straw/fruit_straw_h32",
    "fruit/straw/fruit_straw_h33","fruit/straw/fruit_straw_h34",
    "fruit/straw/fruit_straw_h41",
    "fruit/straw/fruit_straw_h42",
    "fruit/straw/fruit_straw_h43","fruit/straw/fruit_straw_h44"];

var apple_h_imgOrder2 = [
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h11.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h12.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h13.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h14.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h21.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h22.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h23.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h24.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h31.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h32.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h33.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h34.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h41.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h42.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h43.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/apple/fruit_apple_h44.jpg"]; 

var berry_h_imgOrder2 = [
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h11.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h12.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h13.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h14.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h21.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h22.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h23.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h24.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h31.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h32.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h33.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h34.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h41.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h42.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h43.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/berry/fruit_berry_h44.jpg",


]; 

var lime_h_imgOrder2 = [
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h11.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h12.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h13.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h14.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h21.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h22.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h23.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h24.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h31.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h32.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h33.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h34.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h41.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h42.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h43.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/lime/fruit_lime_h44.jpg",
]; 

var straw_h_imgOrder2 = [
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h11.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h12.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h13.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h14.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h21.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h22.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h23.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h24.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h31.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h32.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h33.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h34.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h41.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h42.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h43.jpg",
    "http://127.0.0.1:5501/Main/FourDiPage/fruit/straw/fruit_straw_h44.jpg",
]; 
            
/*Random*/
applerandomImgOrder = apple_h_imgOrder.sort(() => 0.5 - Math.random());
berryrandomImgOrder = berry_h_imgOrder.sort(() => 0.5 - Math.random());
limerandomImgOrder = lime_h_imgOrder.sort(() => 0.5 - Math.random());
strawrandomImgOrder = straw_h_imgOrder.sort(() => 0.5 - Math.random());

/*Four Start Game */
function h_start_game1(){
    playMusic();
    for(let r = 0; r < rows ;r++)
    {
        for(let c = 0 ; c< columns ; c++)
        {
            //img id="0-0"
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("images1");
            console.log("tile id "+tile.id);
            tile.src = applerandomImgOrder.shift() + ".jpg";
            console.log("tile src " + tile.src);

            //drag functionality
            tile.addEventListener("dragstart",dragStart1);//click an image to drag
            tile.addEventListener("dragover",dragOver);//moving image around while click
            tile.addEventListener("dragenter",dragEnter);//dragging image onto another one
            tile.addEventListener("dragleave",dragLeave);//dragged image leaving another image
            tile.addEventListener("drop",dragDrop1);//drag an image over another image,drop the image
            tile.addEventListener("dragend",dragEnd1);//after drag drop

            document.getElementById("hard_board").append(tile);
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
function h_start_game2(){
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
            tile.src = berryrandomImgOrder.shift() + ".jpg";
            console.log("tile src " + tile.src);

            //drag functionality
            tile.addEventListener("dragstart",dragStart2);//click an image to drag
            tile.addEventListener("dragover",dragOver);//moving image around while click
            tile.addEventListener("dragenter",dragEnter);//dragging image onto another one
            tile.addEventListener("dragleave",dragLeave);//dragged image leaving another image
            tile.addEventListener("drop",dragDrop2);//drag an image over another image,drop the image
            tile.addEventListener("dragend",dragEnd2);//after drag drop

            document.getElementById("hard_board").append(tile);
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

function h_start_game3(){
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
            tile.src = limerandomImgOrder.shift() + ".jpg";
            console.log("tile src " + tile.src);

            //drag functionality
            tile.addEventListener("dragstart",dragStart3);//click an image to drag
            tile.addEventListener("dragover",dragOver);//moving image around while click
            tile.addEventListener("dragenter",dragEnter);//dragging image onto another one
            tile.addEventListener("dragleave",dragLeave);//dragged image leaving another image
            tile.addEventListener("drop",dragDrop3);//drag an image over another image,drop the image
            tile.addEventListener("dragend",dragEnd3);//after drag drop

            document.getElementById("hard_board").append(tile);
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
function h_start_game4(){
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
            tile.src = strawrandomImgOrder.shift() + ".jpg";
            console.log("tile src " + tile.src);

            //drag functionality
            tile.addEventListener("dragstart",dragStart4);//click an image to drag
            tile.addEventListener("dragover",dragOver);//moving image around while click
            tile.addEventListener("dragenter",dragEnter);//dragging image onto another one
            tile.addEventListener("dragleave",dragLeave);//dragged image leaving another image
            tile.addEventListener("drop",dragDrop4);//drag an image over another image,drop the image
            tile.addEventListener("dragend",dragEnd4,);//after drag drop

            document.getElementById("hard_board").append(tile);
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
    /*if(!otherTile.src.includes("natureImg/ne_imgs/blank.jpg")){ //swap only if blankimage
        return;
    }*/
    let currCoords1;/*currCoords2,currCoords3,currCoords4;*/
    let otherCoords1;/*otherCoords2,otherCoords3,otherCoords4;*/

    /*For g animal*/
    currCoords1 = curTile1.id.split("-");
    let g_r1 = parseInt(currCoords1[0]);
    let g_c1 = parseInt(currCoords1[1]);

    otherCoords1 = otherTile1.id.split("-");
    let g_r2 = parseInt(otherCoords1[0]);
    let g_c2 = parseInt(otherCoords1[1]);

    let moveLeft1 = g_r1 == g_r2 && g_c2 == g_c1-1;
    let moveRight1 = g_r1 == g_r2 && g_c2 == g_c1+1;
    let moveUp1 = g_c1 == g_c2 && g_r2 == g_r1-1;
    let moveDown1 = g_c1 == g_c2 && g_r2 == g_r1+1;

    let isAdjacent1 = moveLeft1 || moveRight1 || moveUp1 || moveDown1 ;
    if(isAdjacent1){
        let g_currImg = curTile1.src;
        let g_otherImg = otherTile1.src;
        curTile1.src = g_otherImg;
        otherTile1.src = g_currImg;
        moves +=1;
        document.getElementById("record_moves").innerHTML = "Moves:"+ moves;
}
let win1 = true;
    for (let index = 0; index < apple_imgs.length; index++) {
        if(apple_imgs[index].src !== apple_h_imgOrder2[index]){
            win1 = false;
        }
    }
    if (win1) {
        document.getElementById("gameWin").play();
        document.getElementById("hard_board").style.pointerEvents="none";
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
            location = "../ModePage/hardModeIndex.html"
            }
            else{
                location = "../ThreeDiPage/hardIndex1.html"
            }
        });
        clearInterval(durations);
    }
}
function dragEnd2() {
    currCoords2 = curTile2.id.split("-");
    let h_r1 = parseInt(currCoords2[0]);
    let h_c1 = parseInt(currCoords2[1]);

    otherCoords2 = otherTile2.id.split("-");
    let h_r2 = parseInt(otherCoords2[0]);
    let h_c2 = parseInt(otherCoords2[1]);

    let moveLeft2 = h_r1 == h_r2 && h_c2 == h_c1-1;
    let moveRight2 = h_r1== h_r2 && h_c2== h_c1+1;
    let moveUp2 = h_c1== h_c2 && h_r2 == h_r1-1;
    let moveDown2 = h_c1== h_c2 && h_r2== h_r1+1;
    let isAdjacent2 = moveLeft2 || moveRight2 || moveUp2 || moveDown2 ;
    if(isAdjacent2){
        let h_currImg = curTile2.src;
        let h_otherImg = otherTile2.src;
        curTile2.src = h_otherImg;
        otherTile2.src = h_currImg;
        moves +=1;
        document.getElementById("record_moves").innerHTML = "Moves:"+ moves;
    }  
    let win2 = true;
    for (let index = 0; index < berry_imgs.length; index++) {
        if(berry_imgs[index].src !== berry_h_imgOrder2[index]){
            win2 = false;
        }
    }
    if (win2) {
        document.getElementById("gameWin").play();
        document.getElementById("hard_board").style.pointerEvents="none";
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
            location = "../ModePage/hardModeIndex.html"
            }
            else{
                location = "../ThreeDiPage/hardIndex2.html"
            }
        });
        clearInterval(durations);
    }
}

function dragEnd3(){
    currCoords3 = curTile3.id.split("-");
let ice_r1 = parseInt(currCoords3[0]);
let ice_c1 = parseInt(currCoords3[1]);

otherCoords3 = otherTile3.id.split("-");
let ice_r2 = parseInt(otherCoords3[0]);
let ice_c2 = parseInt(otherCoords3[1]);

let moveLeft3 = ice_r1 == ice_r2 && ice_c2 == ice_c1-1;
let moveRight3 = ice_r1== ice_r2 && ice_c2== ice_c1+1;
let moveUp3 = ice_c1== ice_c2 && ice_r2 == ice_r1-1;
let moveDown3 = ice_c1== ice_c2 && ice_r2== ice_r1+1;
let isAdjacent3 = moveLeft3 || moveRight3 || moveUp3 || moveDown3 ;
if(isAdjacent3){
    let ice_currImg = curTile3.src;
    let ice_otherImg = otherTile3.src;
    curTile3.src = ice_otherImg;
    otherTile3.src = ice_currImg;
    moves +=1;
    document.getElementById("record_moves").innerHTML = "Moves:"+ moves;
}
let win3 = true;
for (let index = 0; index < lime_imgs.length; index++) {
    if(lime_imgs[index].src !== lime_h_imgOrder2[index]){
        win3 = false;
    }
}
if (win3) {
    document.getElementById("gameWin").play();
    document.getElementById("hard_board").style.pointerEvents="none";
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
        location = "../ModePage/hardModeIndex.html"
        }
        else{
            location = "../ThreeDiPage/hardIndex3.html"
        }
    });
    clearInterval(durations);
}

}  

function dragEnd4(){
    currCoords4 = curTile4.id.split("-");
    let lake_r1 = parseInt(currCoords4[0]);
    let lake_c1 = parseInt(currCoords4[1]);
    
    otherCoords4 = otherTile4.id.split("-");
    let lake_r2 = parseInt(otherCoords4[0]);
    let lake_c2 = parseInt(otherCoords4[1]);
    
    let moveLeft4 = lake_r1 == lake_r2 && lake_c2 == lake_c1-1;
    let moveRight4 = lake_r1== lake_r2 && lake_c2== lake_c1+1;
    let moveUp4 = lake_c1== lake_c2 && lake_r2 == lake_r1-1;
    let moveDown4 = lake_c1== lake_c2 && lake_r2== lake_r1+1;
    let isAdjacent4 = moveLeft4 || moveRight4 || moveUp4 || moveDown4 ;
    if(isAdjacent4){
        let lake_currImg = curTile4.src;
        let lake_otherImg = otherTile4.src;
        curTile4.src = lake_otherImg;
        otherTile4.src = lake_currImg;
        moves +=1;
        document.getElementById("record_moves").innerHTML = "Moves:"+ moves;
    }
        let win4 = true;
        for (let index = 0; index < straw_imgs.length; index++) {
            if(straw_imgs[index].src !== straw_h_imgOrder2[index]){
                win4 = false;
            }
        }
        if (win4) {
            document.getElementById("gameWin").play();
            document.getElementById("hard_board").style.pointerEvents="none";
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
                location = "../ModePage/hardModeIndex.html"
                }
                else{
                    location = "../ThreeDiPage/hardIndex4.html"
                }
            });
            clearInterval(durations);
        }
}

