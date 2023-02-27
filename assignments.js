/*
const country = 'Spain';
const continent = 'Europe';
let population = '49';
const language = 'Spanish'
const isIsland = false;


console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
//const description1 =
//   country +
//  ' is in ' +
//    continent +
//   ', and its ' +
//   population +
//   ' million people speak ' +
//  language;

const description1 = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description1);



country = 'Spain';
population = 49;

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population}`);
}


const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
console.log(markBMI);
const johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

const markHihgherBMI = markBMI > johnBMI;
console.log(markHihgherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's ${johnBMI}!`);

} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's ${markBMI}!`);

}



const numNeighbours = Number(prompt("How many countries does your country have?"));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

const speaksEnglish = 'Spanish';
const population = 48;
const isIsland = false;
const country = 'Spain'

if (speaksEnglish === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria : (`);
}


const averageDolphinsScore = (97 + 112 + 101) / 3;
const averageKoalasScore = (109 + 95 + 123) / 3;
console.log(averageDolphinsScore, averageKoalasScore);

if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
    console.log(`Team Dolphins wins with an average of ${averageDolphinsScore}`);
} else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore >= 100) {
    console.log(`Team Koala wins with an average of ${averageKoalasScore}`);
} else if (averageDolphinsScore === averageKoalasScore && averageDolphinsScore >= 100 && averageKoalasScore >= 100) {
    console.log(`We have a draw to ${averageDolphinsScore} from team Dolphins to ${averageKoalasScore}`);
} else {
    console.log('No one wins the trophy');
}



const language = 'english'

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}



const country = 'Spain';
const population = 48;

console.log(
    `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);


*/
const billValue = 275;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);

