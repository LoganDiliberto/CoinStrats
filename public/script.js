function sendInfo() {
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
    xml.open("GET","http://localhost:8080/coin")
    xml.send();
}

//displays failure if theres an error getting the json
function error(err){
    console.log("failure")
}

function displayData() {
    //console.log(this.body)
    candles = JSON.parse(this.response)
    openTimes = []
    openPrice = []
    highPrice = []
    lowPrice = []
    closePrice = []
    volume = []
    for (i = 0; i < candles.length; i++) {
        openTimes.push(candles[i][0])
        openPrice.push(candles[i][1])
        highPrice.push(candles[i][2])
        lowPrice.push(candles[i][3])
        closePrice.push(candles[i][4])
        volume.push(candles[i][5])
    }
    console.log(openTimes)
    console.log(openPrice)
    console.log(highPrice)
    console.log(lowPrice)
    console.log(closePrice)
    console.log(volume)
}