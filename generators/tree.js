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
                output += "è " + creature.getDiet();
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
tree.creatures.push(new EvolutionStage(3, "Foca", [-1,5], [17, 18], [1, 8]));
tree.creatures.push(new EvolutionStage(4, "Pecora", [-3], [11, 12], [6, 8]));
//carnivori
tree.creatures.push(new EvolutionStage(5, "Procione", [-1], [9, 10], [1, 9]));
tree.creatures.push(new EvolutionStage(6, "Furetto", [4,7], [13, 14], [1, 8]));
//onnivori
tree.creatures.push(new EvolutionStage(7, "Echidna", [-2,4], [19, 20], [1, 8]));
tree.creatures.push(new EvolutionStage(8, "Anguilla", [3,5], [15, 16], [3, 9]));
//lvl 3 - 12 creatures
//erbivori
tree.creatures.push(new EvolutionStage(9, "Ippopotamo", [], [21, 22], [7, 8]));
tree.creatures.push(new EvolutionStage(10, "Opossum", [], [23, 24], [6, 7]));
tree.creatures.push(new EvolutionStage(11, "Capra", [], [25, 26], [11, 12]));
tree.creatures.push(new EvolutionStage(12, "Alpaca", [], [27, 28], [4, 6]));
//carnivori
tree.creatures.push(new EvolutionStage(13, "Gatto", [], [29, 30], [4, 11]));
tree.creatures.push(new EvolutionStage(14, "Volpe", [], [31, 32], [4, 6]));
tree.creatures.push(new EvolutionStage(15, "Salmone", [], [33, 34], [7, 10]));
tree.creatures.push(new EvolutionStage(16, "Varano", [], [35, 36], [1, 8]));
//onnivori
tree.creatures.push(new EvolutionStage(17, "Scimmia", [], [37, 38], [1, 6]));
tree.creatures.push(new EvolutionStage(18, "Beluga", [], [39, 40], [7, 10]));
tree.creatures.push(new EvolutionStage(19, "Pollo", [], [41, 42], [11, 12]));
tree.creatures.push(new EvolutionStage(20, "Topo", [], [43, 44], [1, 6]));
//lvl 4 - 24 creatures
//erbivori
tree.creatures.push(new EvolutionStage(21, "Elefante", [], "", [2, 0, 10]));
tree.creatures.push(new EvolutionStage(22, "Rinoceronte", [], "", [2, 2, 3]));
tree.creatures.push(new EvolutionStage(23, "Canguro", [], "", [8, 3, 11]));
tree.creatures.push(new EvolutionStage(24, "Koala", [], "", [0, 5, 9]));
tree.creatures.push(new EvolutionStage(25, "Cavallo", [], "", [5, 2, 12]));
tree.creatures.push(new EvolutionStage(26, "Cervo", [], "", [2, 2, 1]));
tree.creatures.push(new EvolutionStage(27, "Bisonte", [], "", [2, 2, 10]));
tree.creatures.push(new EvolutionStage(28, "Cammello", [], "", [11, 10, 8]));
//carnivori
tree.creatures.push(new EvolutionStage(29, "Leone", [], "", [6, 5, 11]));
tree.creatures.push(new EvolutionStage(30, "Leopardo", [], "", [11, 11, 4]));
tree.creatures.push(new EvolutionStage(31, "Orso", [], "", [9, 7, 10]));
tree.creatures.push(new EvolutionStage(32, "Lupo", [], "", [1, 4, 0]));
tree.creatures.push(new EvolutionStage(33, "Squalo", [], "", [4, 0, 7]));
tree.creatures.push(new EvolutionStage(34, "Pesce Spada", [], "", [2, 9, 12]));
tree.creatures.push(new EvolutionStage(35, "Coccodrillo", [], "", [4, 4, 10]));
tree.creatures.push(new EvolutionStage(36, "Tartaruga", [], "", [3, 3, 7]));
//onnivori
tree.creatures.push(new EvolutionStage(37, "Gorilla", [], "", [3, 6, 4]));
tree.creatures.push(new EvolutionStage(38, "Umanoide", [], "", [0, 5, 12]));
tree.creatures.push(new EvolutionStage(39, "Balena", [], "", [10, 9, 3]));
tree.creatures.push(new EvolutionStage(40, "Delfino", [], "", [11, 0, 2]));
tree.creatures.push(new EvolutionStage(41, "Aquila", [], "", [5, 5, 4]));
tree.creatures.push(new EvolutionStage(42, "Struzzo", [], "", [10, 3, 12]));
tree.creatures.push(new EvolutionStage(43, "Pipistrello", [], "", [0, 5, 12]));
tree.creatures.push(new EvolutionStage(44, "Capibara", [], "", [0, 4, 7]));


module.exports = tree;