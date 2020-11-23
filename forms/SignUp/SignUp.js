let first_name  = inptFirst.value
let last_name = inptLast.value
let email = inptEmail.value
 
btnAdd.onclick = function() {
query = "Insert into customer (first_name, last_name, email) values (first_name, last_name, email)"
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=elb82977&pass=" + pw + "&database=375groupa6&query=" + query)
  if (req.status == 200) { //transit worked.
    if (req.responseText == 500) { // means the insert succeeded
       lblAdd.value = "Customer successfully added!"
    } else
      lblAdd.value = "There was a problem with adding the customer to the database."
  } else {
    // transit error
    console.log("Error: " + req.status);
  }
 
  }
btnHome2.onclick=function(){
  ChangeForm(Home)
}
