

PhoneWeatherPhoto.onshow=function(){

 myCity= inputLocation.value
 //alert(inputLocation.value)

/*
 let foundIndex = -1 
  for (i = 0; i <= apiDataInfo.result.length - 1; i++)
    if (apiDataInfo.result[i].name == restName) 
      foundIndex = i 
  
    if (foundIndex != -1)
*/


  phoneNumber = (apiDataInfo.result.formatted_phone_number)
  lblPhone2.value= "Call: " + phoneNumber
 }
 
 // use your own url copied from Postman
let myURL2 = ""
let description = ""

function onXHRLoad3() {
    let message = ""
    let apiDataWeather = JSON.parse(this.responseText)
   
  /*  
    console.log(apiData)
    console.log(`${apiData.weather[0].description}`)
    console.log(`${apiData.main.temp}`)
    console.log(`${apiData.main.feels_like}`)
    console.log(`${apiData.main.humidity}`)
   
    */
   

    let description = apiDataWeather.weather[0].description
    let temperature = Math.round((((apiDataWeather.main.temp - 273.15) * 1.8) + 32))
    let feelLike = Math.round((((apiDataWeather.main.feels_like - 273.15) * 1.8) + 32))
   
   
    //let humidity = (apiDataWeather.main.humidity)
   
    message = message + "Description: "+ description+ "\n"+ "Temperature: "+ temperature+ "\n"+ "Feels Like: " + feelLike
   
   
    //add back to message if needed
    //+ "\n"+ "Humidity: "+ humidity

   
    txtWeather.value = message

}

function callAPI3(URL) {
    var xhttp = new XMLHttpRequest();
   
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url
   
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
   
    // if you DON'T need cors use this code
    //xhttp.open('GET',URL)
   
    // if you need to set the returned data type, use this line of code:
    //xhttp.setRequestHeader('Content-Type', 'application/json')
   
    // if you need authorization token (stored in myToken) use this line of code:
    // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
   
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here.
   
    /* danielle key
    xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
    xhttp.setRequestHeader('location','41.276900,-95.942310')
    xhttp.setRequestHeader('rankby','distance')
    xhttp.setRequestHeader('type','restaurant')
    */

    // make the API request
    xhttp.addEventListener('load', onXHRLoad3)
    xhttp.send()
}


btnWeather.onclick = function(){
  // call the API calling code above
  //myCity= inputlocation.value
  myURL2= "api.openweathermap.org/data/2.5/weather?q="+myCity+"&appid=3e9678995cb843c5c16bbc783f0146b4"
  callAPI3(myURL2)
 
}
      
/*
lblPhone2.onclick=function(){
  Window.location.href = 'tel://' + phoneNumber
}

*/


btnReserve.onclick=function(){
  ChangeForm(Reservation)
}
