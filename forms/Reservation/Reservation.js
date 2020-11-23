
// global variables for database calls
let req = ""
let query = ""
//let result = ""
let pw = "Zone1259" // put your database password here
let userName = 'elb82977'

btnCap.onclick=function(){
  query = "SELECT * from restaurant order by reservation_time"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=elb82977&pass=" + pw + "&database=375groupa6&query=" + query)

  if (req.status == 200) { //transit worked.
   result = JSON.parse(req.responseText)
    console.log(result)
  }
  if (result.length == 0) {
    // if no customers in a table brings back this message
    NSB.MsgBox("There are no customers found.")
  } else {
    //a loop that adds all the customers in the array to the dropdown.
    let message = ""
    for (i = 0; i <= result.length - 1; i++)
      message = message + result[i][1] + "\n"
     txtCap.value = message
  }
  
}

lblRest.value = restName

btnSubmit.onclick=function(){
  ChangeForm(SignUp)
}
