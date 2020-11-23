RestaurantInfo.onshow=function(){
  let foundIndex = -1 
  for (i = 0; i <= apiData.results.length - 1; i++)
    if (apiData.results[i].name == restName) 
      foundIndex = i 
  
    if (foundIndex != -1)
    
      placeid = (apiData.results[foundIndex].place_id)
      
      
     // alert(apiData.results[foundIndex].formatted_address)
     
      address = (apiData.results[foundIndex].formatted_address)
      lblLocation.value = "Address: " + address
      
      price = (apiData.results[foundIndex].price_level)
      lblPrice.value = "Price Level: " + price
      
      rating = (apiData.results[foundIndex].rating)
      lblRating.value = "Rating: " + rating
      
      types = (apiData.results[foundIndex].types)
      lblType.value = "Restaurant Type: " + types[0] + " " + types[1]
      
     
      
   
      
     // open_now = (apiData.results[foundIndex].opening_hours.open_now)
      //lblHours.value = "Open?: " + open_now
      
      
    }
    



//gets the phone number    
function onXHRLoad2() {
  
  apiDataInfo = JSON.parse(this.responseText)
  
   }

function callAPI2(URL) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    xhttp.addEventListener('load', onXHRLoad2)
    xhttp.send()
}    

btnHome.onclick=function(){
    
  ChangeForm(Home)
}



btnMoreInfo.onclick=function(){
    ChangeForm(PhoneWeatherPhoto)                               
    requestURL = "https://maps.googleapis.com/maps/api/place/details/json?place_id="+placeid+"&key=AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY"
    callAPI2(requestURL)

}
