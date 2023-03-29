var btn = document.getElementById('btn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    getData();
});
function getData() {
    // https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=edf62346872eeb20f153988c7a73de56
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
        .then(function (response) { return response.json(); }).then(function (data) { return addDataInTable(data); })
        .catch(function (err) {
        console.log('Err', err);
    });
}
function addDataInTable(data) {
    console.log(data.Results);
    var table = document.getElementById("table");
    for (var i = 0; i < data.Results.length; i++) {
        var vehiclesData = data.Results[i];
        var row = table.insertRow(i + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = vehiclesData['Make_ID'];
        cell2.innerHTML = vehiclesData['Make_Name'];
    }
}
