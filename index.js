const names = ["Guadalupe", "Ollie", "Aki"]
const theEvent = "surprise"

function writeCards(arrayName, eventName){
    const newArray =[]
    for(let n = 0; n < arrayName.length; n++){
        const message = `Thank you, ${arrayName[n]}, for the wonderful ${eventName} gift!`
        newArray.push(message)
    }
    return newArray  
}


// const gifts = ['bear', 'book', 'drone']

// function wrapGifts(gifts){
//     let i =0;
//     while (i<gifts.length) {console.log(`A message ${gifts[i]} just testing!`);
//     i++ 
//     }
//     return gifts
// }

// wrapGifts(gifts)

function countDown(number){
    if(number<0) {console.log("Input a positive integer!")};

    let x = number
    while(x>=0) {console.log(x);
    x--
    }
}


