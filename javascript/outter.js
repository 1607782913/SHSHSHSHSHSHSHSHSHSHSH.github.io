/*简单滚图的js*/
var imgarr = document.getElementsByTagName("p");
var imglist = document.getElementById("imglist");
imglist.style.width = 1150 * imgarr.length + "px";
autochange();
var index = 0;
function autochange() {
    var move1 = document.getElementById("imglist");
    setInterval(function () {
        if (index == 2){
            index = 0;
            move(move1, 180, -1150 * index, "left");
        }
        else{
            index++;
            move(move1, 30, -1150 * index, "left");
        }
    }, 3000);
}