/*

//set to neg 1, loop to find a match, if you found a match and if you didn't 

RestaurantInfo.onshow=function(){
  let foundIndex = -1
  for (i = 0; i <= apiData.results.length - 1; i++)
    if (apiData.results[i].name == restName) 
      foundIndex = i 
      
    
  
    if (foundIndex != -1)
      address = (apiData.results[foundIndex].formatted_address)
      lblLocation.value = "Address: " + address
      price = (apiData.results[foundIndex].price_level)
      lblPrice.value = "Price Level: " + price
     rating = (apiData.results[foundIndex].rating)
      lblRating.value = "Rating: " + rating
      type = (apiData.results[foundIndex].type)
      lblType.value = "Restaurant Type: " + type
    }
  */
