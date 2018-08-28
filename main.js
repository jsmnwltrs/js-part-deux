const age = 26;

if (age < 21){
    console.log("stay away");
 } else if (age>75) {
 console.log('its naptime');
} else {
    console.log('you can drink');
 }

 if (age >= 21){
    console.log('call an uber');
} else {
    console.log('bring your fake id next time')
}

//const a = 1;
//const b = '1';

//const a === b //false
//const a == b //true

//a !== b //true
//a != b //false

const favoriteColor = 'blue';
const favoriteAnimal = 'bear';

if (favoriteAnimal === 'bear' && favoriteColor === 'blue') {
    console.log('welcome to the club')
} else if (favoriteAnimal === 'cat' || favoriteColor === 'red'){
    console.log('$500 to join the club')
} else {
    console.log('go away')
}

const hiDiv = document.getElementById('hi');
console.log(hiDiv);

const pie = 'peach';
console.log('pie length: ', pie.length);
console.log('#3', pie.charAt(2));
console.log('indexof cat', pie.indexOf('cat')); 
console.log('indexof pea', pie.indexOf('pea')); 


const quote = 'winter is coming'
const newQuote = quote.replace(/is/g, "ain't");
console.log('newQuote', newQuote);


