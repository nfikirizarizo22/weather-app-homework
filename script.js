document.getElementById("search").addEventListener("click", getWeather);

async function getWeather() {
    //async:"It waits for something (API) before it continues.
    let city = document.getElementById("nameofcity").value;
    if (city === "") {
        alert("Type a city name!");
        return null;
    }
    try{
        let api= "23bcbc5d396ffd8fb1640cb2ee7ae9e8";
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);
        let data = await response.json();
        console.log(data);
        // if (!data.temperature) {
        //     alert("City not found!");
        //     return null;}
        catchme(data);
    }catch(error){
        console.log("This is an error try to fix this");
        return null;
    }
}   
async function catchme(data){
    if (!data) return;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("city").innerText = data.name;
    document.getElementById("hum").innerText = data.main.humidity;
    document.getElementById("wind").innerText = data.wind.speed;
}