//Declare a variable and assign a value
var likePet = "true"
var maybeLikePets = "true" 
var nayPet = "true"


$('#pets').on('click', yesForPets);
$('#kinda').on('click', kindaLikePets);
$('#noPets').on('click', nayForPets);


function yesForPets() {
	if (likePet == "true") {
		
		var html = "";
		html += '<img src="images/bo.jpg" />';
		html += '<div id="result">PETS ARE THE BEST!!!</div>" ';

		//SETTER method
		$('body').html(html);	    
	}

//how can i make the "pets are the best" and picture come up at the same times?
}	

function kindaLikePets(){
	if (maybeLikePets == "true")
	$('#confused').html("I KINDA LIKE PETS");
	$('body').html('<img src="images/charlie.jpg" />');

}

function nayForPets(){
	if (nayPet == "true")
	$('#conclusion').html("I DON'T LIKE PETS");
	$('body').html('<img src="images/debbie.gif" />');

}


