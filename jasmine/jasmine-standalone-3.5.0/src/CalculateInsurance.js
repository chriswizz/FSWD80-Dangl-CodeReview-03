function calculateInsurancePerCountry(horsepower, age, country) {

	// var name = document.getElementById("input-name").value;
	// var country = document.getElementById("selection-country").value;
	// var age = Math.round(document.getElementById("input-age").value);
	// var horsepower = Math.round(document.getElementById("input-horsepower").value);
	// var insuranceCosts = 0;

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

	return(Math.round(insuranceCosts));
}