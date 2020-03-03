function sendInfo(){
    var strats = "stoch"
    var timestart = ""
    var timeend = ""
    strats = document.getElementById("strats").value
    timestart = document.getElementById("start").value
    timeend = document.getElementById("end").value
    document.getElementById("test").innerHTML = strats + " " + timestart
    //Gets the json file from the get request
    var xml = new XMLHttpRequest();
    xml.addEventListener("load",displayData);
    xml.open("GET","http://localhost:8080/coin?strats="+strats+"&timestart="+timestart+"&timeend="+timeend)
    xml.send();
}

//displays failure if theres an error getting the json
function error(err){
    console.log("failure")
}

function displayData() {
       
}