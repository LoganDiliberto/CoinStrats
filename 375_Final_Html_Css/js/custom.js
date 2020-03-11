$.backstretch("./img/BitcoinBackground.jpg");


document.getElementById("button").onclick = function () {
  $.backstretch("./img/" + document.getElementById("Image").value + ".jpg");
  var image = "url(img/"+ document.getElementById('Color').value;
  if(document.getElementById("transparent").checked){
    image = image + "_transparent";
  }
  $('.container-narrow').css('background-image', image + ".png)");

}

function openNav() {
  document.getElementById("mySidenav").style.width = "233px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
