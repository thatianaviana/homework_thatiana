// Define our variables
var symptoms = ['Confusion', 'Brain Freeze', 'Completely Lost'];


symptoms.push("Headache");

// Add another symptom!
symptoms.push('Frustration')
symptoms.push('Annoyed')

// Now lets remove one symptom

symptoms.splice(2, 1);

// Append to the DOM
$.each(symptoms, function(index, value){
    $('#more').append('<li class="list-group-item">' + value + '</li>');
   
});


// Handle Events
$('#newSymptom').on('click', function(){
    var sign = $('#disease').val();

    if (sign != '')
   	{
	    symptoms.push(sign);
    	$('#more').append('<li class="list-group-item">' + sign + '</li>');
    	$('#disease').val('');
    	console.log(symptoms);
   	}
});




//BONUS: Create a <ul> in the HTML and use $.each() to add each value as a <li>




