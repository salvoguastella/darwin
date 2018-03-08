const EvolutionStage = require("../classes/evolution_stage.js");
const Objective = require("../classes/objective.js");

let objectives = {
    elements: []
};

objectives.elements.push(new Objective(10, [
    { id: 3, mul: 2 },
    { id: 4, mul: 5 }
]));
objectives.elements.push(new Objective(10, []));
objectives.elements.push(new Objective(10, []));


module.exports = objectives;