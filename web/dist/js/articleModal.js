/* USER1 */

var articlemodal = document.getElementById("ArticleModal");
var articlemodal1 = document.getElementById("ArticleModal1");
var articlemodal2 = document.getElementById("ArticleModal2");
var articlemodal3 = document.getElementById("ArticleModal3");
var articlemodal4 = document.getElementById("ArticleModal4");
var articlemodal5 = document.getElementById("ArticleModal5");
var articlemodal6 = document.getElementById("ArticleModal6");
var articlemodal7 = document.getElementById("ArticleModal7");


var btn = document.getElementById("ArticleBtn");
var btn1 = document.getElementById("ArticleBtn1");
var btn2 = document.getElementById("ArticleBtn2");
var btn3 = document.getElementById("ArticleBtn3");
var btn4 = document.getElementById("ArticleBtn4");
var btn5 = document.getElementById("ArticleBtn5");
var btn6 = document.getElementById("ArticleBtn6");
var btn7 = document.getElementById("ArticleBtn7");


var span = document.getElementsByClassName("article-close")[0];
var span1 = document.getElementsByClassName("article-close1")[0];
var span2 = document.getElementsByClassName("article-close2")[0];
var span3 = document.getElementsByClassName("article-close3")[0];
var span4 = document.getElementsByClassName("article-close4")[0];
var span5 = document.getElementsByClassName("article-close5")[0];
var span6 = document.getElementsByClassName("article-close6")[0];
var span7 = document.getElementsByClassName("article-close7")[0];

btn.onclick = function() {
    articlemodal.style.display = "block";
    }

span.onclick = function() {
    articlemodal.style.display = "none";
    }

window.onclick = function(event) {
    if (event.target == articlemodal) {
        articlemodal.style.display = "none";
        }
    }

/*MODAL 2*/

btn1.onclick = function() {
    articlemodal1.style.display = "block";
    }

span1.onclick = function() {
    articlemodal1.style.display = "none";
    }

window.onclick = function(event) {
    if (event.target == articlemodal1) {
        articlemodal1.style.display = "none";
        }
    }

/*MODAL 3*/

btn2.onclick = function() {
    articlemodal2.style.display = "block";
    }

span2.onclick = function() {
    articlemodal2.style.display = "none";
    }

window.onclick = function(event) {
    if (event.target == articlemodal2) {
        articlemodal2.style.display = "none";
        }
    }

/*MODAL 4*/

btn3.onclick = function() {
    articlemodal3.style.display = "block";
    }

span3.onclick = function() {
    articlemodal3.style.display = "none";
    }

window.onclick = function(event) {
    if (event.target == articlemodal3) {
        articlemodal3.style.display = "none";
        }
    }

/*MODAL 5*/

btn4.onclick = function() {
    articlemodal4.style.display = "block";
    }

span4.onclick = function() {
    articlemodal4.style.display = "none";
    }

window.onclick = function(event) {
    if (event.target == articlemodal4) {
        articlemodal4.style.display = "none";
        }
    }

/*MODAL 6*/

btn5.onclick = function() {
    articlemodal5.style.display = "block";
    }

span5.onclick = function() {
    articlemodal5.style.display = "none";
    }

window.onclick = function(event) {
    if (event.target == articlemodal5) {
        articlemodal5.style.display = "none";
        }
    }

/*MODAL 7*/

btn6.onclick = function() {
    articlemodal6.style.display = "block";
    }

span6.onclick = function() {
    articlemodal6.style.display = "none";
    }

window.onclick = function(event) {
    if (event.target == articlemodal6) {
        articlemodal6.style.display = "none";
        }
    }


/*MODAL 8*/

btn7.onclick = function() {
    articlemodal7.style.display = "block";
    }

span7.onclick = function() {
    articlemodal7.style.display = "none";
    }

window.onclick = function(event) {
    if (event.target == articlemodal7) {
        articlemodal7.style.display = "none";
        }
    }
