//Code your solutions in this file

//1.

const fiveToOneHundred = () => {

    for (let i = 5; i < 101; i++) {
        console.log(`Counting: ${i}`);
    }

};

//console.log(fiveToOneHundred())


//2.

const multiplesOfThree = () => {
    for (let i = 3; i < 100; i += 3) {
        console.log(i);
    }
};
//multiplesOfThree()

//3.

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

//4.

const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
};

//5.

const multiply = (num, num2) => {
    return num * num2
}

console.log(multiply(-2, 2))

//untilNum(6)
