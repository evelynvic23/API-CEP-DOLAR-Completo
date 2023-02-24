fetch (`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(response => {
    return response.json()

}).then(economia => {
    console.log(economia)
     document.getElementById("dolar").value = economia.USDBRL.bid;
     document.getElementById("moeda").innerHTML = economia.USDBRL.code;
     document.getElementById("alto").value = economia.USDBRL.high;
     document.getElementById("baixo").value = economia.USDBRL.low;
   

})




