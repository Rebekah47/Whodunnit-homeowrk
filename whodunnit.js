//Episode 1
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
const declareMurderer = function() {
return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// Predicted Outome: Miss Scarlet
// Reasoning: The function is drilling into the const scenario and getting Miss Scarlet. 


//Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Predicted Outcome: Professor Plum
//Reasoning: murderer is a const and therefore cannot be reassigned in the function.


// Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
let murderer = 'Mrs. Peacock';
return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
//Predicted Outcome(First Verdict): Mrs Peacock
//Reasoning: the let variable has been reassigned in the function.
//Predicted Outcome(Second Verdict): Professor Plum
//Reasoning: The function hasnt been called in the second verdict.


// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
let suspectThree = 'Colonel Mustard';
return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
//Predicted Outcome: 'Mrs. Peacock'
//Reasoning: the let variable isnt changed by the declareAllSuspects function becasuse the function isnt called in the second console.log


// Episode 5
const scenario = {
murderer: 'Miss Scarlet',
room: 'Kitchen',
weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
scenario.weapon = newWeapon;
}

const declareWeapon = function() {
return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
//Predicted Outcome: Revolver
//Reasoning: The functions are both called and reassign the weapon object inside the array


// Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
murderer = 'Mr. Green';

const plotTwist = function() {
    murderer = 'Mrs. White';
}

plotTwist();
}

const declareMurderer = function () {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Predicted Outcome:  Mr Green
//Reasoning: Whilst plotTwist is called first, the changedMurderer function replaces the murderer that was Mrs White to Mr Green.

// Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
murderer = 'Mr. Green';

const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
    murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
}

plotTwist();
}

const declareMurderer = function() {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Predicted Outcome: Colonel Mustard
//Reasoning: The plotTwist function that is called inside the change murder function is called last and so replaces everythign that came before it.


// Episode 8
const scenario = {
murderer: 'Mrs. Peacock',
room: 'Conservatory',
weapon: 'Lead Pipe'
};

const changeScenario = function() {
scenario.murderer = 'Mrs. Peacock';
scenario.room = 'Dining Room';

const plotTwist = function(room) {
    if (scenario.room === room) {
    scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
    if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
    }
    }

    unexpectedOutcome('Colonel Mustard');
}

plotTwist('Dining Room');
}

const declareWeapon = function() {
return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
//Predicted Outcome: Candle Stick
//Reasoning: The function chancgeScenario shifts the weapon because plot twist is called inside the function but outside unexpectedOutcome.

// Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//Predicted Outcome: Professor Plum
//Reasoning: No function is called to carry out the if statment