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


function countDown(number){
    if(number<0) {console.log("Input a positive integer!")};

    let x = number
    while(x>=0) {console.log(x);
    x--
    }
    return number
}


