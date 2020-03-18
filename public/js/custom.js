$.backstretch("./img/BitcoinBackground.jpg");




function openNav() {
  var w = parseInt(window.innerWidth);
  if(w <= 500) {
    document.getElementById("mySidenav").style.width = "100%";
  } else{
    document.getElementById("mySidenav").style.width = "233px";
    document.getElementById("main").style.marginLeft = "250px";
  }
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
