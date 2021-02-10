// Code your solutions in this file




function writeCards(array, event){
    
     //We move this into the method so each time the method is called we access a local scope and not a global scope array
    let newArray = [];
    for( let i = 0; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)

    }
    return newArray;
}

writeCards(array, "birthday");



function countDown() {
    let initCount = 10;
    while (initCount >= 0) {
      console.log(initCount--);
    } 
}

countDown(10)


/** TEST CODE ALONG 1

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     //debugger;
//   } 

 */

// TEST CODE ALONG 2

// const gifts = ["Toy Plane", "PS5", "Saxophone"];

// const wrapGifts = function (gifts){
//     for ( let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]}`)
//         debugger;
//     }

//     return gifts
// }


// wrapGifts(gifts)