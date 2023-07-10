window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    //   document.getElementById("goUpButton").style.visibility = "visible";
    } else {
      reveals[i].classList.remove("active");
    //   document.getElementById("goUpButton").style.visibility = "hidden";
    }
  }
}

window.onload=function(){
    document.getElementById("goUpButton").style.visibility="hidden"
   
}

// back to top button hide /visible
window.onscroll = function () {
    var pageoffset=document.documentElement.scrollTop || document.body.scrollTop
  if (pageoffset >= 500) {
    document.getElementById("goUpButton").style.visibility = "visible";
    document.getElementById("downButton").style.visibility="hidden"
  } else {
    document.getElementById("goUpButton").style.visibility = "hidden";
    document.getElementById("downButton").style.visibility="visible"
  }
};

