var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

function setStyles4(){
    for(var i=0; i<4; i++){
        ProductImg[i] = SmallImg[i].src;
    }
}

setStyles4();

// SmallImg[0].onclick = function() {
//     ProductImg.src = SmallImg[0].src;
// }
// SmallImg[1].onclick = function() {
//     ProductImg.src = SmallImg[1].src;
// }
// SmallImg[2].onclick = function() {
//     ProductImg.src = SmallImg[2].src;
// }
// SmallImg[3].onclick = function() {
//     ProductImg.src = SmallImg[3].src;
// }