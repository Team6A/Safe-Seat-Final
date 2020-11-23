// Dr. Corritore Feedback
// * one big change - don't do 2 AJAX calls on this page - 
//   that was too confusing. See below. But there were other 
//   problems that you can fix with this algorithm. 
//

// The problem: your algorithm (logic) is not quite right. 
// This is what I think you want to do. 
// 0. remove the code for the second AJAX call 
//    (like the boolean variable)
// 1. when the user enters Omaha in the textbox and 
//    then clicks the dropdown, the event you want to 
//    use to then tell the program to get the restaurant
//    data and load the names into the dropdown is: 
//    .onfocusout
//    This means when the user clicks out of the textbox, 
//    the .onfocusout event would be called. 
// 2. In the .onfocusout event you want to get the rest. 
//    data and populate the dropdown. Move code you already 
//    wrote to this event. Move code that"
//    - gets their city choice
//    - builds the requestURL using that location
//    - uses callAPI with that url
// 3. Now you have all the rest. names in apiData and the 
//    dropdown has all the rest's around Omaha. 
// 4. When the user clicks the button, take them to the 
//    restaurantInfo form. 
// 5. using the form event for when the form is loaded 
//    (.onshow) copy the code from the Home page 
//   `call api request URL and the two functions that go with it
// 6. add whatever code you need to then get the info you need
//    from the API request using the restaurant name they 
//    chose (which is a global variable).



// I changed named of variable on lines 4 
// to be more clear 
let apiData = ""
let apiDataInfo = ""
let apiDataWeather = ""
let message= ""
let restName = ""
let restaurantLocation = ""
let placeid= ""
let restaurantArray = []
let phoneArray = []
let phoneNumber = ""
let result = ""

//  restaurantBoolean = false



function onXHRLoad() {
  //console.log("in XHRLoad" + requestURL)
    
//dont need to display in textbox 
// true false statement to loop when running multiple apis

    
        apiData = JSON.parse(this.responseText)

      
      for (i = 0; i <= apiData.results.length - 1; i++) {
        temp = apiData.results[i].name
        restaurantArray.push(temp)
        }
   
    
      // if want to add to database call a function here that does that
      // addToDatabase()
      drpRestaurants.clear()   
      // put array of desserts in the dropdown (called populating it)
      for (i = 0; i <= restaurantArray.length - 1; i++) 
          drpRestaurants.addItem(restaurantArray[i])

  
  
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}


/*
submit.onclick=function(){ 
  
// call the API calling code above
 
  
  
   // Heyo what's good this is the place id api call - need this to get place search 
   
   //new api, this is using the Place_ID from the first API to get a fricking phone number  
   
  requestURL = "https://maps.googleapis.com/maps/api/place/details/json?place_id="+placeid+"&fields=name,formatted_phone_number&key=AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY"
  
  callAPI(requestURL)

}

 */
  


inputLocation.onfocusout=function(){

   let restaurantLocation= inputLocation.value
    
  let requestURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+"+restaurantLocation+"&key=AIzaSyDRTDMQ4GP9k0Efp4RP3BNKx1ikMG97FAw"
  
  callAPI(requestURL)
  
  
  
}



//ChangeForm(RestaurantInfo)
//does not work if there is a space 



drpRestaurants.onclick = function(s){
  if (typeof(s) =='object')
    return
  else{
      
// *** Line 101 - this says to put their choice 
// into the dropdown. This is not what you want to 
// do, is it? 

// *** lines 103 and 104 have to be before 
// changeform -else changeform will take 
// user to another form and 103,104 will 
// never be run. 
// Also, you don't have a control on this 
// page named lblName.
      
// *** if the user picks a restaurant from 
// the dropdown, code below says to immediately 
// go to the RestaurantInfo page. Is that 
// really what you want to do? No ....

   drpRestaurants.value = s
    ChangeForm(RestaurantInfo)
    lblName.value = s
    restName = s
  }
  
}



Home.onhide=function(){
  
}
