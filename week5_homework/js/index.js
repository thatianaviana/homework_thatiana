//Declare a variable and assign a value
var likePet = "true"
var nayPet = "true"


$('#pets').on('click', yesForPets);
$('#noPets').on('click', nayForPets);

function yesForPets() {
	if (likePet == "true")
    $('#result').html('PETS ARE THE BEST!!!');
	$('body').html('<img src="images/bo.jpg" />');

	
}	


function nayForPets(){
	if (nayPet == "true")
	$('#conclusion').html("I PREFER MY FREEDOM");
	$('body').html('<img src="images/debbie.gif" />');

}

//what code do i use if i want one result to go away when i click on the different button?

 //$('#yourButton').on('click', yourFunction);
//$('#yourButton').on('click', yourFunction);
//$('#yourButton').on('click', yourFunction);

  //  $('#result').html('Do something');
  //  console.log("#yourButton was clicked");
  //else 
	 //$('body').removeClass('CATS ROCK');