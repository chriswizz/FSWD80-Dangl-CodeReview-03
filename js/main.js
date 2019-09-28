function calculateInsurance() {

	var name = document.getElementById("input-name").value;
	var country = document.getElementById("selection-country").value;
	var age = Math.round(document.getElementById("input-age").value);
	var horsepower = Math.round(document.getElementById("input-horsepower").value);
	var insuranceCosts = 0;

	switch (country) {
		case "austria":
			insuranceCosts = horsepower * 100 / age + 50;
			break;
		case "hungary":
			insuranceCosts = horsepower * 120 / age  + 100;
			break;
		case "greece":
			insuranceCosts = horsepower * 150 / (age+3)  + 50;
			break;
	};

	(function checkIfNumer() {
  		if (name == "") {
    		document.getElementById("calculation-output").innerHTML = "Please enter a name";
    	} else if (age == "" || isNaN(age)) {
    		document.getElementById("calculation-output").innerHTML = "Please enter a number for your age";
    	} else if (horsepower == "" || isNaN(horsepower)) {
    		document.getElementById("calculation-output").innerHTML = "Please enter a number for the horsepower of your car";
    	} else {
			document.getElementById("calculation-output").innerHTML = 
				document.getElementById("input-name").value + ", your insurance costs " + Math.round(insuranceCosts) + " €";
		}
  	}());
}

document.getElementById("button-calculate").addEventListener("click", calculateInsurance);