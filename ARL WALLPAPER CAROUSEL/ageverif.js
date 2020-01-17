function validateanddisplay(){
	var age=document.getElementById("age1").value;
	
	if(age<18){
		document.write('<img src="img4.jpg" width="304" height="228" >');

	}
	else if (age>=18) {
		document.write('<img src="img5.jpg" width="304" height="228" id="img5">');

	}
}