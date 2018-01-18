//Declare a variable and assign a value
var likePet = true;
var pet = "bo";

$('#pets').on('click', yesForPets);
$('#noPets').on('click', nayForPets);

function yesForPets() {
    likePet = true;
    if(pet == "bo") {
        pet = "cat";
    } else {
        pet = "bo";
    }
    showImage();
}

function nayForPets(){
    likePet = false;
    showImage();
}

function showImage()
{
    if (likePet) {
        $('#result').html('PETS ARE THE BEST!!!');
        $('body').html('<img src="images/charlie.jpg" />');
    } else {
        $('#conclusion').html("I PREFER MY FREEDOM");
        $('body').html('<img src="images/debbie.gif" />');    
    }
}

/*
//Declare a variable and assign a value
var likePet = "true"
var nayPet = "true"


$('#pets').on('click', yesForPets);
$('#noPets').on('click', nayForPets);

function yesForPets() {
    if (likePet == "true") {
        $('#result').html('PETS ARE THE BEST!!!');
        $('body').html('<img src="images/bo.jpg" />');
    }
}   


function nayForPets(){
    if (nayPet == "true")
    {
        $('#conclusion').html("I PREFER MY FREEDOM");
        $('body').html('<img src="images/debbie.gif" />');
    }
}
    jonathan code
    if (likePet) {
        $('#result').html('PETS ARE THE BEST!!!');
        $('body').html('<img src="images/' + pet + '.jpg" />');
    } else {
        $('#conclusion').html("I PREFER MY FREEDOM");
        $('body').html('<img src="images/debbie.gif" />');    
    }
}
*/
