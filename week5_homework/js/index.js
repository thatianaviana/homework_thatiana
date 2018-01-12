//Declare a variable and assign a value
var likePet = true;

$('#pets').on('click', yesForPets);
$('#noPets').on('click', nayForPets);

function yesForPets() {
    likePet = true;
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
        $('body').html('<img src="images/bo.jpg" />');
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
*/
