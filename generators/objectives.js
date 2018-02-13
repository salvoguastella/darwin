const EvolutionStage = require("../classes/evolution_stage.js");
const Objective = require("../classes/objective.js");

let objectives = {
    elements: []
};

objectives.elements.push(new Objective(10, [
    { id: 3, qty: 2 },
    { id: 4, qty: 5 }
], "Do something"));
objectives.elements.push(new Objective(10, [], "Do something"));
objectives.elements.push(new Objective(10, [], "Do something"));


module.exports = objectives;