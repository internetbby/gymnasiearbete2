//button introduction
let introductionPage = document.getElementById("introductionPage");


var form = document.getElementById("theForm")

var firstPage = document.getElementById("pageOne");
var secondPage = document.getElementById("pageTwo");
var thirdPage = document.getElementById("pageThree");
var fourthPage = document.getElementById("pageFour");
var fifthPage = document.getElementById("pageFive")
var sixthPage = document.getElementById("pageSix")
var seventhPage = document.getElementById("pageSeven")
var eightPage = document.getElementById("pageEight")
var ninthPage = document.getElementById("pageNine")
var tenthPage = document.getElementById("pageTen")

var endingPage = document.getElementById("endPage")

firstPage.style.display = "none";
secondPage.style.display = "none";
form.style.display = "none";
thirdPage.style.display ="none";
fourthPage.style.display = "none";
fifthPage.style.display = "none";
sixthPage.style.display = "none";
seventhPage.style.display = "none"; 
eightPage.style.display = "none";
ninthPage.style.display = "none"; 
tenthPage.style.display = "none"; 

endingPage.style.display = "none";




var redButton = document.querySelectorAll(".one");


function clockTimer(pageToHide, pageToShow,clockNumber){//hide clock timer 
  var seconds_left = 10;
  var interval = setInterval(function() {
    document.getElementById(clockNumber).innerHTML = --seconds_left;

    if (seconds_left <= 0 && pagetoHide.style.display != "none")
    { 

        pageToHide.style.display = "none";
        pageToShow.style.display = "block";
        clearInterval(interval);

        

    }
}, 1000);

}


function hidePage (pagetoHide, pageToShow){
  pagetoHide.style.display = "none";
  pageToShow.style.display = "block"; 
}


introductionPage.addEventListener("click", () => {
  console.log("click");
 
  hidePage(introductionPage,firstPage);
  form.style.display ="block"
  
  clockTimer(firstPage,secondPage,"clock");

});



  firstPage.addEventListener("click", () => {
    while(firstPage.style.display == "block"){
    hidePage(firstPage,secondPage);
    
    clockTimer(secondPage,thirdPage,"clock2");
  
  }
   
  });
  





secondPage.addEventListener("click", () => {

  console.log("click");

  hidePage(secondPage,thirdPage);
  
  clockTimer(thirdPage,fourthPage,"clock3");
});

thirdPage.addEventListener("click", () => {
  console.log("click");

  hidePage(thirdPage,fourthPage);

  clockTimer(fourthPage,fifthPage,"clock4");
});

fourthPage.addEventListener("click", () => {
  console.log("click");

  hidePage(fourthPage,fifthPage)
  
  clockTimer(fourthPage,fifthPage,"clock5");
});

fifthPage.addEventListener("click", () => {
  console.log("click");

  hidePage(fifthPage,sixthPage)
  
  clockTimer(fifthPage,sixthPage,"clock6");
});

sixthPage.addEventListener("click", () => {
  console.log("click");

  hidePage(sixthPage,seventhPage)
  
  clockTimer(sixthPage,seventhPage,"clock7");
});

seventhPage.addEventListener("click", () => {
  console.log("click");

  hidePage(seventhPage,eightPage)
  
  clockTimer(seventhPage,eightPage,"clock8");
});

eightPage.addEventListener("click", () => {
  console.log("click");

  hidePage(eightPage,ninthPage)
  
  clockTimer(eightPage,ninthPage,"clock9");
});

ninthPage.addEventListener("click", () => {
  console.log("click");

  hidePage(ninthPage,tenthPage)
  
  clockTimer(ninthPage,tenthPage,"clock10");
});

ninthPage.addEventListener("click", () => {
  console.log("click");

  hidePage(tenthPage,endingPage)
});

