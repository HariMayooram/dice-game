
// var inmg=document.querySelectorAll("img")[0];
var randNumb= Math.floor(Math.random()*6)+1;
var path = "images/dice"+ randNumb+".png";


var getOClass=document.getElementsByClassName("img1")[0];
var imgsrc=getOClass.setAttribute("src", path);


var randomNumb= Math.floor(Math.random()*6)+1;
var pathTwo = "images/dice"+ randomNumb+".png";

var getTwoClass=document.getElementsByClassName("img2")[0];
var imgSource=getTwoClass.setAttribute("src", pathTwo);


if(randNumb > randomNumb)
{
    document.querySelector("h3").innerHTML ="<h3>Player 1 won</h3>"
}

else
{
    document.querySelector("h3").innerHTML ="<h3>Player 2 won</h3>"
}

// tpt.src="images/dice"+ randNumb+".png";
// var t=document.getElementsByClassName("img1")

// alert(inmg);
alert(pt);

// alert("Working")


