//Code your solutions in this file

//Question 1

const fiveToOneHundred = () => {

    for (let i = 5; i < 101; i++) {
        console.log(`Counting: ${i}`);
    }

};

//console.log(fiveToOneHundred())

//Question 3

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 33; i++) {
        const multiple3 = i * 3
        console.log(`${multiple3}`)
    }
    for (let j = 1; j <= 20; j++) {
        const multiple5 = j * 5
        console.log(`${multiple5}`)
    }
}

//console.log(multiplesOfThreeOrFive())