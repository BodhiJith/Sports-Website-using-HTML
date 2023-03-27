//validation
function RequiredN() {
	let x = document.forms["myForm"]["name"].value;
  if (x == "") {
		alert("Name must be filled");
		return false;
  }
  let z = document.forms["myForm"]["email"].value;
  if (z == ""){
		alert("Email not filled");
		return false;
  }
  let y = document.forms["myForm"]["subject"].value;
  if (y == "" ){
		alert("Theme not filled");
		return false;
  } 
  
  let q = document.forms["myForm"]["message"].value;
	if (q == ""  ){
		alert("Details not filled");
		return false;
  }
	let radios = document.getElementsByName("choice");
		var formValid = false;{

		var i = 0;
   while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

		if (!formValid) alert("Must check some option!");
		return formValid;
		
	}
 }


//innerhtml

 function showInput() {
	var e =document.getElementById("delivery");
	var f =document.getElementById("return");
	var g =document.getElementById("other");
	
	if (e.checked == true){
	var subject = "Delivery";
	}
	if (f.checked == true){
	var subject = "Return";
	}
	if (g.checked == true){
	var subject = "Other";
	}

	document.getElementById('display1').innerHTML = ("Name:  "+ document.getElementById("name").value);
	document.getElementById('display3').innerHTML = ("Email:  "+ document.getElementById("email").value);			
	document.getElementById('display2').innerHTML = ("Theme:  "+ document.getElementById("subject").value);	
	document.getElementById('display4').innerHTML = ("Details:  "+ document.getElementById("message").value);
	document.getElementById('display5').innerHTML = ("Subject:  "+ subject);
				
	
	
}
 
  