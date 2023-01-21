const apiKey = '58120be6fb5432a91d6e5a8554033674';
var obj = { arrayOfPreviousSearches: [] };

// // create a function to fire on click
// function getAPI(){

//     // reach intot he thmle and grab the user input
//     // combine that user input to create a request url for geocoding
//     var geocodeURL = ""
//     // user fetch to call for geocode info    
//     fetch(geocodeURL)
//     .then(function (response) {
//         // take a response data and transform it to geocode data
//     return response.json();
//     })
//     .then(function (geoData) {
//         console.log(geoData)

//         // extract the lat and lon from the the geodata
//         // concate that into the weather url the currect way
//         var requestURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=58120be6fb5432a91d6e5a8554033674";
        
//         // fectch weather data
//         //  -- then
//         //  -- convert to data
//         // -- then
//         // -- log your data
//         // --p ut it on the scre
// })
// fetch(latLong)
// .then(function (response){
//     return response.json();
// })
// .then(function (latLongData){
    
//     var latLongURL = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
    

// })
// }

// getAPI();

document.getElementById('search-button').addEventListener('click', fetchAPI)
// get weather for 5 days
// did research, found we need lat and lon first
// get lat and long
// what is the url that will get us lat and lon
// -- http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// replace the stuff in the {} and the brackets w/ the city and api key respectvially
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
            document.getElementById('current-city').append(geocodeData[0].local_names.en)
            document.getElementById('temperature').append(fiveDayArray[0].main.temp-273.15)
            document.getElementById('humidity').append(fiveDayArray[0].main.humidity)
            document.getElementById('wind-speed').append(fiveDayArray[0].wind.speed)

            //day 1
            document.getElementById('futureDate0').append(fiveDayArray[7].dt_txt)
            document.getElementById('futureImg0').append(fiveDayArray[7].weather[0].icon)
            document.getElementById('futureTemp0').append(fiveDayArray[7].main.temp-273.15)
            document.getElementById('futureHumidity0').append(fiveDayArray[7].main.humidity)
            //day2
            document.getElementById('futureDate1').append(fiveDayArray[15].dt_txt)
            document.getElementById('futureImg1').append(fiveDayArray[15].weather[0].icon)
            document.getElementById('futureTemp1').append(fiveDayArray[15].main.temp-273.15)
            document.getElementById('futureHumidity1').append(fiveDayArray[15].main.humidity)
            //day3
            document.getElementById('futureDate2').append(fiveDayArray[23].dt_txt)
            document.getElementById('futureImg2').append(fiveDayArray[23].weather[0].icon)
            document.getElementById('futureTemp2').append(fiveDayArray[23].main.temp-273.15)
            document.getElementById('futureHumidity2').append(fiveDayArray[23].main.humidity)
            //day4
            document.getElementById('futureDate3').append(fiveDayArray[31].dt_txt)
            document.getElementById('futureImg3').append(fiveDayArray[31].weather[0].icon)
            document.getElementById('futureTemp3').append(fiveDayArray[31].main.temp-273.15)
            document.getElementById('futureHumidity3').append(fiveDayArray[31].main.humidity)
            //http://openweathermap.org/img/wn/10d@2x.png
            //day 5
            // let img4 = document.getElementById('futureImg4');
            // img4.src = "http://openweathermap.org/img/wn/" + fiveDayArray[39].weather[0].icon + "@2x.png";
            // document.getElementById('futureImg4').append(img4)
            document.getElementById('futureDate4').append(fiveDayArray[39].dt_txt)
            document.getElementById('futureTemp4').append(fiveDayArray[39].main.temp-273.15)
            document.getElementById('futureHumidity4').append(fiveDayArray[39].main.humidity)
        })
    })
}
        // }).then((response) => { return response.json() }).then((data) => {
        // document.getElementById('city-search').textContent = "";
        // document.getElementById('city-search').append(data.choices[0].text)
        // }).catch((error) => {
        // //Display error message to the user if fetch() API call fails
        // document.getElementById('error-message').textContent = "Something went wrong..";
        // });
        // -- then
        // -- then
        // -- -- do the thing w/ that data
    
    
    // var city = document.getElementById('city-search').value

     // if (city === "") {
     //     document.getElementById('error-message').textContent = "Please enter a City"
     //     setTimeout(() => { document.getElementById('error-message').textContent = "" }, 3000)
     //     return 