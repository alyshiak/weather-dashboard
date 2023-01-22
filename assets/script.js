const apiKey = '58120be6fb5432a91d6e5a8554033674';
var obj = { arrayOfPreviousSearches: [] };

document.getElementById('search-button').addEventListener('click', clearPreviousSearch)

function clearPreviousSearch(){
    document.getElementById('current-city').textContent = ""
    document.getElementById('temperature').textContent = ""
    document.getElementById('humidity').textContent = ""
    document.getElementById('wind-speed').textContent = ""

    //day 1
    document.getElementById('futureDate0').textContent = ""
    document.getElementById('futureImg0').textContent = ""
    document.getElementById('futureTemp0').textContent = ""
    document.getElementById('futureHumidity0').textContent = ""
    //day2
    document.getElementById('futureDate1').textContent = ""
    document.getElementById('futureImg1').textContent = ""
    document.getElementById('futureTemp1').textContent = ""
    document.getElementById('futureHumidity1').textContent = ""
    //day3
    document.getElementById('futureDate2').textContent = ""
    document.getElementById('futureImg2').textContent = ""
    document.getElementById('futureTemp2').textContent = ""
    document.getElementById('futureHumidity2').textContent = ""
    //day4
    document.getElementById('futureDate3').textContent = ""
    document.getElementById('futureImg3').textContent = ""
    document.getElementById('futureTemp3').textContent = ""
    document.getElementById('futureHumidity3').textContent = ""
    //day 5
    document.getElementById('futureImg4').textContent = ""
    document.getElementById('futureDate4').textContent = ""
    document.getElementById('futureTemp4').textContent = ""
    document.getElementById('futureHumidity4').textContent = ""
    fetchAPI()
}

function fetchAPI(){
console.log('FetchAPI working')
let citySearch = document.getElementById('city-search').value;
if (citySearch === ''){
document.getElementById('error-message').textContent = "Please enter a city"
return }
let latLonUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+ citySearch +'&limit=5&appid=' + apiKey;
// make a call to that new api
fetch(latLonUrl)
    .then(function(resp) {
        console.log(resp);
        return resp.json();
    })
    .then(function(geocodeData) {
        // do whatwer w/ that
        console.log(geocodeData)
        // extract the data you need to place you next order
        var latitude = geocodeData[0].lat
        var longitude = geocodeData[0].lon
        // put that data into the url you need for the next oder
        var fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
        // place the next order (fetch)
        // fetch
        fetch(fiveDayURL).then(function(response){
            return response.json();

        }).then(function(fiveDayData){
            console.log(fiveDayData)
            var fiveDayArray = fiveDayData.list
            console.log(fiveDayArray)
            //current
            let img = document.createElement("img"); 
            img.src = "http://openweathermap.org/img/wn/" + fiveDayArray[0].weather[0].icon + "@2x.png";
            document.getElementById('currentImg').appendChild(img);
            document.getElementById('current-city').append(geocodeData[0].local_names.en)
            document.getElementById('temperature').append(' ' + (fiveDayArray[0].main.temp-273.15).toFixed(2) + '°C')
            document.getElementById('humidity').append(' ' + fiveDayArray[0].main.humidity + '%')
            document.getElementById('wind-speed').append(' ' + fiveDayArray[0].wind.speed + ' MPH')

            //day 1
            let img0 = document.createElement("img"); 
            img0.src = "http://openweathermap.org/img/wn/" + fiveDayArray[7].weather[0].icon + "@2x.png";
            document.getElementById('futureImg0').appendChild(img0);
            document.getElementById('futureDate0').append(fiveDayArray[7].dt_txt)
            document.getElementById('futureTemp0').append(' ' + (fiveDayArray[7].main.temp-273.15).toFixed(2) + '°C')
            document.getElementById('futureHumidity0').append(' ' + fiveDayArray[7].main.humidity + '%')
            //day2
            let img1 = document.createElement("img"); 
            img1.src = "http://openweathermap.org/img/wn/" + fiveDayArray[15].weather[0].icon + "@2x.png";
            document.getElementById('futureImg1').appendChild(img1);
            document.getElementById('futureDate1').append(fiveDayArray[15].dt_txt)
            document.getElementById('futureTemp1').append(' ' + (fiveDayArray[15].main.temp-273.15).toFixed(2) + '°C')
            document.getElementById('futureHumidity1').append(' ' + fiveDayArray[15].main.humidity + '%')
            //day3
            let img2 = document.createElement("img"); 
            img2.src = "http://openweathermap.org/img/wn/" + fiveDayArray[23].weather[0].icon + "@2x.png";
            document.getElementById('futureImg2').appendChild(img2);
            document.getElementById('futureDate2').append(fiveDayArray[23].dt_txt)
            document.getElementById('futureTemp2').append(' ' + (fiveDayArray[23].main.temp-273.15).toFixed(2) + '°C')
            document.getElementById('futureHumidity2').append(' ' + fiveDayArray[23].main.humidity + '%')
            //day4
            let img3 = document.createElement("img"); 
            img3.src = "http://openweathermap.org/img/wn/" + fiveDayArray[31].weather[0].icon + "@2x.png";
            document.getElementById('futureImg3').appendChild(img3);
            document.getElementById('futureDate3').append(fiveDayArray[31].dt_txt)
            document.getElementById('futureTemp3').append(' ' + (fiveDayArray[31].main.temp-273.15).toFixed(2) + '°C')
            document.getElementById('futureHumidity3').append(' ' + fiveDayArray[31].main.humidity + '%')
            //day 5
            let img4 = document.createElement("img"); 
            img4.src = "http://openweathermap.org/img/wn/" + fiveDayArray[39].weather[0].icon + "@2x.png";
            document.getElementById('futureImg4').appendChild(img4);
            document.getElementById('futureDate4').append(fiveDayArray[39].dt_txt)
            document.getElementById('futureTemp4').append(' ' + (fiveDayArray[39].main.temp-273.15).toFixed(2) + '°C')
            document.getElementById('futureHumidity4').append(' ' + fiveDayArray[39].main.humidity + '%')
        })
    })
}
