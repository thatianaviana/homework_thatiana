/*####### HOMEWORK #####
Define 5 variables
Assign each data type to 1 of the five variables (string, number, boolean, object, function)
Access each variable in some way

Bonus: Use 3 different assignment operators
Bonus: Use 2 different logic operators
Bonus: Use and if/else */

var name = "Thatiana ";
var age = 36;
var ageInAmerica = 19;
var country = " United States of America";

console.log(name + age + " originally from Brazil and currently living in " + country);

age += 1
console.log("My age will be " + age + " next year");


var familyDets = {
  'siblings': 2,
  'fiance': "Brittany",
  'country': "Brasil",
  'kids': false
}
console.log(familyDets['siblings']);

var dualCitizenship = [
  "Brazilian ",
  "American"
]
console.log(dualCitizenship [1]);

var currentCountry = function(){
  country = "USA";
   return country;
}
  console.log(currentCountry ());


var ageOne = 20;
var ageTwo = 40;
var retiringAgeTotal = ageOne + ageTwo;

console.log(retiringAgeTotal);

if (retiringAgeTotal == 40)
{ console.log('You Still Have a Long Ways to Go')

} else {
  console.log("Congrats! Time for pina coladas all day now");

}
