const tree = require("./generators/tree.js");
const events = require("./classes/event.js");
const objectives = require("./generators/objectives.js");

tree.getStatus();

console.log("\n");
console.log(events.total() + " events available");
console.log("\n");

//one event per card.
//two active events per turn after first turn


/*
events.forEach((event, index) => {
    console.log((index + 1) + ") " + event.toString());
});

console.log("\n");
console.log(objectives.elements.length + " objectives available");
console.log("\n");


objectives.elements.forEach((objective, index) => {
    let printString = `${(index + 1)}) ${objective.points} punti: `;
    objective.requirements.forEach((requirement, i) => {
        let creature = tree.exists(requirement.id);
        if (creature) printString += requirement.multiplier + " " + creature.name;
        if (i < objective.requirements.length - 1) printString += ", ";
    });
    console.log(printString);
});
*/