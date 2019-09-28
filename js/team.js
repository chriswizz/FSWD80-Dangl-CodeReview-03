var teamMembersObject = JSON.parse(teamMembers);
var i = 0;

for (i = 0; i < teamMembersObject.length; i++) {
	document.getElementById("team").innerHTML +=
		"<div class='member'>" +
			"<img src='" + teamMembersObject[i].image + "' class='member-image'>" +
			"<p class='bold'>" + teamMembersObject[i].name + "<hr>" + teamMembersObject[i].email + "</p>" +
		"</div>";
};