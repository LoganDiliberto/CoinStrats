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
    xml.open("GET", "http://localhost:8080/coin")
    xml.send();
}

//displays failure if theres an error getting the json
function error(err){
    console.log("failure")
}

function displayData() {
    //console.log(this.body)
    exampleMethod(JSON.parse(this.response))
}

function exampleMethod(json) {//This is a method that calculates the profit/loss and returns it based on a jsonfile
    maxBuy = 0.00225
    maxSell = 0.0024
    minBuy = 0.00222
    minSell = 0.00223
    buyPercent = .1
    sellPercent = .1
    balanceBNB = 0.0
    balanceBTC = 1.0

    originalBTC = 1
    candles = json
    openTimes = []
    openPrice = []
    highPrice = []
    lowPrice = []
    closePrice = []
    volume = []
    closeTimes = []
    for (i = 0; i < candles.length; i++) {
        openTimes.push(candles[i][0])
        openPrice.push(candles[i][1])
        highPrice.push(candles[i][2])
        lowPrice.push(candles[i][3])
        closePrice.push(candles[i][4])
        volume.push(candles[i][5])
        closeTimes.push(candles[i][6])
    }
    
    for (length = 0; length <= openTimes.length - 1; length++) {//For every time interval given check if buy or sell
        price = openPrice[length]//price for that time interval
        if (price > minSell && price < maxSell) {//Is the price within sell range
            if (balanceBNB > 0) {//Do you have enough balance to sell?
                //alert("Sell: "+ balanceBTC)
                //Take sellPercent of the balance and sell it
                buyingBalance = balanceBNB * sellPercent//Sell only a percent of your remaining balance
                balanceBNB -= buyingBalance//Subtract what you are selling from your balance
                //Sell 
                balanceBTC += price/buyingBalance//Sell your BTC for BNB
            }
        }
        else if (price > minBuy && price < maxBuy) {//Is the price in buy range
            if (balanceBTC > 0) {//Do you have enough balance
                //alert("Buy: " + balanceBTC)
                //Take sellPercent of the balance and sell it
                sellingBalance = balanceBTC * buyPercent//Buy only a percent of your remaining balance
                balanceBTC -= sellingBalance//Subtract that balance for what you're buying
                //Buy
                balanceBNB += sellingBalance / price
            }

        }
    }
    if (balanceBNB > 0) {//Sell the rest of the balance before checking what the final result is
        buyingBalance = balanceBNB * sellPercent//Sell only a percent of your remaining balance
        balanceBNB -= buyingBalance//Subtract what you are selling from your balance
        //Sell 
        balanceBTC += price / buyingBalance//Sell your BTC for BNB
    }
    percent = balanceBTC / originalBTC
    console.log("Percent: made or lost: "+(Math.round(percent*100)*10)/10 + "%")
}

function createMethod(maximumBuy, maximumSell, minimumBuy, minimumSell, bPercent, sPercent, bBNB, bBTC) {
    //Will send this information to a string that will be sent to database
}

function callExistingMethod(someMethod) {
    //Will take in some string from database and convert it to call existingMethod
}

function existingMethod(maximumBuy, maximumSell, minimumBuy, minimumSell, bPercent, sPercent, bBNB, bBTC) {
    //BNB is the balance of the first symbol
    //BTC is the second symbol in sym
    //This matters for inputting your values for sells and buys to match 
    maxBuy = maximumBuy
    maxSell = maximumSell
    minBuy = minimumBuy
    minSell = minimumSell
    buyPercent = bPercent
    sellPercent = sPercent
    balanceBNB = bBNB
    balanceBTC = bBTC

    originalBTC = 1
    candles = json
    openTimes = []
    openPrice = []
    highPrice = []
    lowPrice = []
    closePrice = []
    volume = []
    closeTimes = []
    for (i = 0; i < candles.length; i++) {
        openTimes.push(candles[i][0])
        openPrice.push(candles[i][1])
        highPrice.push(candles[i][2])
        lowPrice.push(candles[i][3])
        closePrice.push(candles[i][4])
        volume.push(candles[i][5])
        closeTimes.push(candles[i][6])
    }

    for (length = 0; length <= openTimes.length - 1; length++) {//For every time interval given check if buy or sell
        price = openPrice[length]//price for that time interval
        if (price > minSell && price < maxSell) {//Is the price within sell range
            if (balanceBNB > 0) {//Do you have enough balance to sell?
                //alert("Sell: "+ balanceBTC)
                //Take sellPercent of the balance and sell it
                buyingBalance = balanceBNB * sellPercent//Sell only a percent of your remaining balance
                balanceBNB -= buyingBalance//Subtract what you are selling from your balance
                //Sell 
                balanceBTC += price / buyingBalance//Sell your BTC for BNB
            }
        }
        else if (price > minBuy && price < maxBuy) {//Is the price in buy range
            if (balanceBTC > 0) {//Do you have enough balance
                //alert("Buy: " + balanceBTC)
                //Take sellPercent of the balance and sell it
                sellingBalance = balanceBTC * buyPercent//Buy only a percent of your remaining balance
                balanceBTC -= sellingBalance//Subtract that balance for what you're buying
                //Buy
                balanceBNB += sellingBalance / price
            }

        }
    }
    if (balanceBNB > 0) {//Sell the rest of the balance before checking what the final result is
        buyingBalance = balanceBNB * sellPercent//Sell only a percent of your remaining balance
        balanceBNB -= buyingBalance//Subtract what you are selling from your balance
        //Sell 
        balanceBTC += price / buyingBalance//Sell your BTC for BNB
    }
    percent = balanceBTC / originalBTC
    console.log("Percent: made or lost: " + (Math.round(percent * 100) * 10) / 10 + "%")//This is the final result
}