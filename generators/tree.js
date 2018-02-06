const EvolutionStage = require("../classes/evolution_stage.js");
const traits = require("../classes/trait.js");

let tree = {
    creatures: [],

    getStatus() {
        this.creatures.forEach(creature => {
            let output = creature.getString();
            // evolutions
            if (creature.evolutions !== null) {
                if (typeof creature.evolutions !== "object") output += "si evolve in [" + creature.evolutions + "], ";
                else {
                    output += "si evolve in [";
                    creature.evolutions.forEach(evolution => {
                        var evolution_creature = this.exists(evolution);
                        if (evolution_creature) output += evolution_creature.name + ", ";
                    });
                    output = output.substring(0, output.length - 2) + "], ";
                }
            }

            // food

            if (creature.food !== null) {
                output += "è "+creature.getDiet();
                if (typeof creature.food !== "object") output += " e mangia [" + creature.food + "], ";
                else {
                    output += " e mangia [";
                    creature.food.forEach(prey => {
                        var prey_creature = this.exists(prey);
                        if (prey_creature) output += prey_creature.name + ", ";
                    });
                    output = output.substring(0, output.length - 2) + "], ";
                }
            }

            // traits

            if (creature.requiredTraits !== null) {
                if (typeof creature.requiredTraits !== "object") output += "richiede [" + creature.requiredTraits + "], ";
                else {
                    output += "richiede [";
                    creature.requiredTraits.forEach(_trait => {
                        var trait = this.has(_trait);
                        if (trait) output += trait.name + ", ";
                    });
                    output = output.substring(0, output.length - 2) + "]";
                }
            }

            console.log(output);
        });
    },

    exists(id) {
        let found = false;
        this.creatures.forEach(creature => {
            if (creature.id == id) {
                found = creature;
            }
        });
        return found;
    },

    has(traitID) {
        let found = false;
        traits.forEach(trait => {
            if (trait.id == traitID) {
                found = trait;
            }
        });
        return found;
    }
};

//plants
tree.creatures.push(new EvolutionStage(-3, "Pianta", "", "", ""));
tree.creatures.push(new EvolutionStage(-2, "Fungo", "", "", ""));
tree.creatures.push(new EvolutionStage(-1, "Insetto", "", "", ""));
//lvl 1 - 3 creatures
tree.creatures.push(new EvolutionStage(0, "Lumaca", [-3], [], ""));
tree.creatures.push(new EvolutionStage(1, "Bruco", [-2], [], ""));
tree.creatures.push(new EvolutionStage(2, "Pesce", [-1], [], ""));
//lvl 2 - 6 creatures
//erbivori
tree.creatures.push(new EvolutionStage(3, "Foca", [], [], []));
tree.creatures.push(new EvolutionStage(4, "Pecora", [], [], []));
//carnivori
tree.creatures.push(new EvolutionStage(5, "Procione", [], [], []));
tree.creatures.push(new EvolutionStage(6, "Furetto", [], [], []));
//onnivori
tree.creatures.push(new EvolutionStage(7, "Echidna", [], [], []));
tree.creatures.push(new EvolutionStage(8, "Anguilla", [], [], []));
//lvl 3 - 12 creatures
//erbivori
tree.creatures.push(new EvolutionStage(9, "Ippopotamo", [], [], []));
tree.creatures.push(new EvolutionStage(10, "Opossum", [], [], []));
tree.creatures.push(new EvolutionStage(11, "Capra", [], [], []));
tree.creatures.push(new EvolutionStage(12, "Alpaca", [], [], []));
//carnivori
tree.creatures.push(new EvolutionStage(13, "Gatto", [], [], []));
tree.creatures.push(new EvolutionStage(14, "Volpe", [], [], []));
tree.creatures.push(new EvolutionStage(15, "Salmone", [], [], []));
tree.creatures.push(new EvolutionStage(16, "Varano", [], [], []));
//onnivori
tree.creatures.push(new EvolutionStage(17, "Scimmia", [], [], []));
tree.creatures.push(new EvolutionStage(18, "Beluga", [], [], []));
tree.creatures.push(new EvolutionStage(19, "Pollo", [], [], []));
tree.creatures.push(new EvolutionStage(20, "Topo", [], [], []));
//lvl 4 - 24 creatures
//erbivori
tree.creatures.push(new EvolutionStage(21, "Elefante", [], "", []));
tree.creatures.push(new EvolutionStage(22, "Rinoceronte", [], "", []));
tree.creatures.push(new EvolutionStage(23, "Canguro", [], "", []));
tree.creatures.push(new EvolutionStage(24, "Koala", [], "", []));
tree.creatures.push(new EvolutionStage(25, "Cavallo", [], "", []));
tree.creatures.push(new EvolutionStage(26, "Cervo", [], "", []));
tree.creatures.push(new EvolutionStage(27, "Bisonte", [], "", []));
tree.creatures.push(new EvolutionStage(28, "Cammello", [], "", []));
//carnivori
tree.creatures.push(new EvolutionStage(29, "Leone", [], "", []));
tree.creatures.push(new EvolutionStage(30, "Leopardo", [], "", []));
tree.creatures.push(new EvolutionStage(31, "Orso", [], "", []));
tree.creatures.push(new EvolutionStage(32, "Lupo", [], "", []));
tree.creatures.push(new EvolutionStage(33, "Squalo", [], "", []));
tree.creatures.push(new EvolutionStage(34, "Pesce Spada", [], "", []));
tree.creatures.push(new EvolutionStage(35, "Coccodrillo", [], "", []));
tree.creatures.push(new EvolutionStage(36, "Tartaruga", [], "", []));
//onnivori
tree.creatures.push(new EvolutionStage(37, "Gorilla", [], "", []));
tree.creatures.push(new EvolutionStage(38, "Umanoide", [], "", []));
tree.creatures.push(new EvolutionStage(39, "Balena", [], "", []));
tree.creatures.push(new EvolutionStage(40, "Delfino", [], "", []));
tree.creatures.push(new EvolutionStage(41, "Aquila", [], "", []));
tree.creatures.push(new EvolutionStage(42, "Struzzo", [], "", []));
tree.creatures.push(new EvolutionStage(43, "Pipistrello", [], "", []));
tree.creatures.push(new EvolutionStage(44, "Capibara", [], "", []));


module.exports = tree;