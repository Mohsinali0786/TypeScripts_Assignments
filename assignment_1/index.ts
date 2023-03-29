type vehiclesData = {
    Make_Id: number,
    Make_Name: string,
}

let btn = document.getElementById('btn')!
btn?.addEventListener("click", function () {
    getData()
})

function getData() {
    // https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=edf62346872eeb20f153988c7a73de56
     fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
        .then(response => response.json()).then((data) => addDataInTable(data)
        )
        .catch(err => {
            console.log('Err', err);
        });

}
function addDataInTable(data) {
    console.log(data.Results)
    var table: HTMLTableElement = <HTMLTableElement>document.getElementById("table");
    for (let i = 0; i < data.Results.length; i++) {
        let vehiclesData: vehiclesData = data.Results[i]
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = vehiclesData['Make_ID']; 
        cell2.innerHTML = vehiclesData['Make_Name'];
    }
}