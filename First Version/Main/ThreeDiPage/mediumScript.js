var rows = 3;
var columns = 3;
var curTile1,curTile2,curTile3,curTile4;
var otherTile1,otherTile2,otherTile3,otherTile4;
var moves = 0;
var sec = 0;
var durations;
/*Initialize Arrays for each easy images*/
let greenrandomImgOrder= [];
let hillrandomImgOrder= [];
let icerandomImgOrder= [];
let lakerandomImgOrder= [];
/*Play Music*/
function playMusic(){
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
}
/*ClassName*/
let green_imgs = document.getElementsByClassName("images1");
let hill_imgs = document.getElementsByClassName("images2");
let ice_imgs = document.getElementsByClassName("images3");
let lake_imgs = document.getElementsByClassName("images4");
/*Original Easy images order*/
var green_m_imgOrder = [
    "mountain/greenlake/mountain_green_m11",
    "mountain/greenlake/mountain_green_m12",
    "mountain/greenlake/mountain_green_m13",
    "mountain/greenlake/mountain_green_m21",
    "mountain/greenlake/mountain_green_m22",
    "mountain/greenlake/mountain_green_m23",
    "mountain/greenlake/mountain_green_m31",
    "mountain/greenlake/mountain_green_m32",
    "mountain/greenlake/mountain_green_m33"];
var hill_m_imgOrder = [
    "mountain/hill/mountain_hill_m11",
    "mountain/hill/mountain_hill_m12",
    "mountain/hill/mountain_hill_m13",
    "mountain/hill/mountain_hill_m21",
    "mountain/hill/mountain_hill_m22",
    "mountain/hill/mountain_hill_m23",
    "mountain/hill/mountain_hill_m31",
    "mountain/hill/mountain_hill_m32",
    "mountain/hill/mountain_hill_m33"];
var ice_m_imgOrder = [
    "mountain/icemountain/mountain_ice_h11",
    "mountain/icemountain/mountain_ice_h12",
    "mountain/icemountain/mountain_ice_h13",
    "mountain/icemountain/mountain_ice_h21",
    "mountain/icemountain/mountain_ice_h22",
    "mountain/icemountain/mountain_ice_h23",
    "mountain/icemountain/mountain_ice_h31",
    "mountain/icemountain/mountain_ice_h32",
    "mountain/icemountain/mountain_ice_h33"];
var lake_m_imgOrder = [
    "mountain/lake/mountain_lake_m11",
    "mountain/lake/mountain_lake_m12",
    "mountain/lake/mountain_lake_m13",
    "mountain/lake/mountain_lake_m21",
    "mountain/lake/mountain_lake_m22",
    "mountain/lake/mountain_lake_m23",
    "mountain/lake/mountain_lake_m31",
    "mountain/lake/mountain_lake_m32",
    "mountain/lake/mountain_lake_m33"];

var green_m_imgOrder2 = [
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/greenlake/mountain_green_m11.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/greenlake/mountain_green_m12.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/greenlake/mountain_green_m13.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/greenlake/mountain_green_m21.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/greenlake/mountain_green_m22.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/greenlake/mountain_green_m23.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/greenlake/mountain_green_m31.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/greenlake/mountain_green_m32.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/greenlake/mountain_green_m33.jpg"]; 

var hill_m_imgOrder2 = [
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/hill/mountain_hill_m11.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/hill/mountain_hill_m12.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/hill/mountain_hill_m13.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/hill/mountain_hill_m21.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/hill/mountain_hill_m22.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/hill/mountain_hill_m23.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/hill/mountain_hill_m31.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/hill/mountain_hill_m32.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/hill/mountain_hill_m33.jpg"]; 

var ice_m_imgOrder2 = [
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/icemountain/mountain_ice_h11.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/icemountain/mountain_ice_h12.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/icemountain/mountain_ice_h13.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/icemountain/mountain_ice_h21.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/icemountain/mountain_ice_h22.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/icemountain/mountain_ice_h23.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/icemountain/mountain_ice_h31.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/icemountain/mountain_ice_h32.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/icemountain/mountain_ice_h33.jpg"]; 

var lake_m_imgOrder2 = [
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/lake/mountain_lake_m11.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/lake/mountain_lake_m12.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/lake/mountain_lake_m13.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/lake/mountain_lake_m21.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/lake/mountain_lake_m22.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/lake/mountain_lake_m23.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/lake/mountain_lake_m31.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/lake/mountain_lake_m32.jpg",
    "http://127.0.0.1:5501/Main/ThreeDiPage/mountain/lake/mountain_lake_m33.jpg"]; 
            
/*Random*/
greenrandomImgOrder = green_m_imgOrder.sort(() => 0.5 - Math.random());
hillrandomImgOrder = hill_m_imgOrder.sort(() => 0.5 - Math.random());
icerandomImgOrder = ice_m_imgOrder.sort(() => 0.5 - Math.random());
lakerandomImgOrder = lake_m_imgOrder.sort(() => 0.5 - Math.random());

/*Four Start Game */
function m_start_game1(){
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
            tile.src = greenrandomImgOrder.shift() + ".jpg";
            console.log("tile src " + tile.src);

            //drag functionality
            tile.addEventListener("dragstart",dragStart1);//click an image to drag
            tile.addEventListener("dragover",dragOver);//moving image around while click
            tile.addEventListener("dragenter",dragEnter);//dragging image onto another one
            tile.addEventListener("dragleave",dragLeave);//dragged image leaving another image
            tile.addEventListener("drop",dragDrop1);//drag an image over another image,drop the image
            tile.addEventListener("dragend",dragEnd1);//after drag drop

            document.getElementById("medium_board").append(tile);
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
function m_start_game2(){
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
            tile.src = hillrandomImgOrder.shift() + ".jpg";
            console.log("tile src " + tile.src);

            //drag functionality
            tile.addEventListener("dragstart",dragStart2);//click an image to drag
            tile.addEventListener("dragover",dragOver);//moving image around while click
            tile.addEventListener("dragenter",dragEnter);//dragging image onto another one
            tile.addEventListener("dragleave",dragLeave);//dragged image leaving another image
            tile.addEventListener("drop",dragDrop2);//drag an image over another image,drop the image
            tile.addEventListener("dragend",dragEnd2);//after drag drop

            document.getElementById("medium_board").append(tile);
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

function m_start_game3(){
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
            tile.src = icerandomImgOrder.shift() + ".jpg";
            console.log("tile src " + tile.src);

            //drag functionality
            tile.addEventListener("dragstart",dragStart3);//click an image to drag
            tile.addEventListener("dragover",dragOver);//moving image around while click
            tile.addEventListener("dragenter",dragEnter);//dragging image onto another one
            tile.addEventListener("dragleave",dragLeave);//dragged image leaving another image
            tile.addEventListener("drop",dragDrop3);//drag an image over another image,drop the image
            tile.addEventListener("dragend",dragEnd3);//after drag drop

            document.getElementById("medium_board").append(tile);
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
function m_start_game4(){
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
            tile.src = lakerandomImgOrder.shift() + ".jpg";
            console.log("tile src " + tile.src);

            //drag functionality
            tile.addEventListener("dragstart",dragStart4);//click an image to drag
            tile.addEventListener("dragover",dragOver);//moving image around while click
            tile.addEventListener("dragenter",dragEnter);//dragging image onto another one
            tile.addEventListener("dragleave",dragLeave);//dragged image leaving another image
            tile.addEventListener("drop",dragDrop4);//drag an image over another image,drop the image
            tile.addEventListener("dragend",dragEnd4,);//after drag drop

            document.getElementById("medium_board").append(tile);
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
    for (let index = 0; index < green_imgs.length; index++) {
        if(green_imgs[index].src !== green_m_imgOrder2[index]){
            win1 = false;
        }
    }
    if (win1) {
        document.getElementById("gameWin").play();
        document.getElementById("medium_board").style.pointerEvents="none";
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
            location = "../ModePage/mediumModeIndex.html"
            }
            else{
                location = "../ThreeDiPage/mediumIndex1.html"
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
    for (let index = 0; index < hill_imgs.length; index++) {
        if(hill_imgs[index].src !== hill_m_imgOrder2[index]){
            win2 = false;
        }
    }
    if (win2) {
        document.getElementById("gameWin").play();
        document.getElementById("medium_board").style.pointerEvents="none";
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
            location = "../ModePage/mediumModeIndex.html"
            }
            else{
                location = "../ThreeDiPage/mediumIndex2.html"
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
for (let index = 0; index < ice_imgs.length; index++) {
    if(ice_imgs[index].src !== ice_m_imgOrder2[index]){
        win3 = false;
    }
}
if (win3) {
    document.getElementById("gameWin").play();
    document.getElementById("medium_board").style.pointerEvents="none";
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
        location = "../ModePage/mediumModeIndex.html"
        }
        else{
            location = "../ThreeDiPage/mediumIndex3.html"
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
        for (let index = 0; index < lake_imgs.length; index++) {
            if(lake_imgs[index].src !== lake_m_imgOrder2[index]){
                win4 = false;
            }
        }
        if (win4) {
            document.getElementById("gameWin").play();
            document.getElementById("medium_board").style.pointerEvents="none";
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
                location = "../ModePage/mediumModeIndex.html"
                }
                else{
                    location = "../ThreeDiPage/mediumIndex4.html"
                }
            });
            clearInterval(durations);
        }
}

