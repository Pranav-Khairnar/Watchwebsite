
window.addEventListener('scroll',myFunction)
var prev = window.scrollY
function myFunction(){
    var current = window.scrollY;
    if(current>prev){
        document.getElementById("navbar").style.top="-100px";
    } else if(current == 0){
        document.getElementById("navbar").style.top="0px";
    }
    if(current > 300 ){
        document.getElementById("nav-text").style.cssText="opacity:0";
    } else{
        document.getElementById("nav-text").style.cssText="opacity:1";

    }
    prev = current;
  
}

function slideAbove(){
    document.documentElement.scrollTop = 0;
}



