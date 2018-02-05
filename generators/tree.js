const EvolutionStage = require("../classes/evolution_stage.js");
const traits = require("../classes/trait.js");

let tree = {
    creatures: [],

    getStatus() {
        this.creatures.forEach(creature => {
            let output = creature.getString();
            // evolutions
            if (creature.evolutions !== null) {
                if (typeof creature.evolutions !== "object") output += "evolves into [" + creature.evolutions + "], ";
                else {
                    output += "evolves into [";
                    creature.evolutions.forEach(evolution => {
                        var evolution_creature = this.exists(evolution);
                        if (evolution_creature) output += evolution_creature.name + ", ";
                    });
                    output = output.substring(0, output.length - 2) + "], ";
                }
            }

            // food

            if (creature.food !== null) {
                if (typeof creature.food !== "object") output += "eats [" + creature.food + "], ";
                else {
                    output += "eats [";
                    creature.food.forEach(prey => {
                        var prey_creature = this.exists(prey);
                        if (prey_creature) output += prey_creature.name + ", ";
                    });
                    output = output.substring(0, output.length - 2) + "], ";
                }
            }

            // traits

            if (creature.requiredTraits !== null) {
                if (typeof creature.requiredTraits !== "object") output += "requires [" + creature.requiredTraits + "], ";
                else {
                    output += "requires [";
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
tree.creatures.push(new EvolutionStage(0, "Batterio", [-3], [3, 4], ""));
tree.creatures.push(new EvolutionStage(1, "Paramecio", [-2], [5, 6], ""));
tree.creatures.push(new EvolutionStage(2, "Ameba", [-1], [7, 8], ""));
//lvl 2 - 6 creatures
//erbivori
tree.creatures.push(new EvolutionStage(3, "Sanguisuga", [-1, -3], [9, 10], [1, 9]));
tree.creatures.push(new EvolutionStage(4, "Medusa", [-2, -3], [11, 12], [2, 14]));
//carnivori
tree.creatures.push(new EvolutionStage(5, "Pesce", [4, 8], [13, 14], [9, 11]));
tree.creatures.push(new EvolutionStage(6, "Nautilus", [3, 7], [15, 16], [13, 14]));
//onnivori
tree.creatures.push(new EvolutionStage(7, "Trilobite", [-2, 3], [17, 18], [4, 5]));
tree.creatures.push(new EvolutionStage(8, "Gambero", [-2, 4], [19, 20], [0, 13]));
//lvl 3 - 12 creatures
//erbivori
tree.creatures.push(new EvolutionStage(9, "Pachidermino", [], [21, 22], []));
tree.creatures.push(new EvolutionStage(10, "Opossum", [], [23, 24], []));
tree.creatures.push(new EvolutionStage(11, "Pony", [], [25, 26], []));
tree.creatures.push(new EvolutionStage(12, "undefined", [], [27, 28], []));
//carnivori
tree.creatures.push(new EvolutionStage(13, "Gatto", [], [29, 30], []));
tree.creatures.push(new EvolutionStage(14, "ProtoCagno", [], [31, 32], []));
tree.creatures.push(new EvolutionStage(15, "Salmone", [], [33, 34], []));
tree.creatures.push(new EvolutionStage(16, "Lucertolone", [], [35, 36], []));
//onnivori
tree.creatures.push(new EvolutionStage(17, "Scimmia", [], [37, 38], []));
tree.creatures.push(new EvolutionStage(18, "Foca", [], [39, 40], []));
tree.creatures.push(new EvolutionStage(19, "Pollo", [], [41, 42], []));
tree.creatures.push(new EvolutionStage(20, "Topo", [], [43, 44], []));
//lvl 4 - 24 creatures
//erbivori
tree.creatures.push(new EvolutionStage(21, "Elefante", [], "", []));
tree.creatures.push(new EvolutionStage(22, "Rinoceronte", [], "", []));
tree.creatures.push(new EvolutionStage(23, "Canguro", [], "", []));
tree.creatures.push(new EvolutionStage(24, "Koala", [], "", []));
tree.creatures.push(new EvolutionStage(25, "Cavallo", [], "", []));
tree.creatures.push(new EvolutionStage(26, "Cervo", [], "", []));
tree.creatures.push(new EvolutionStage(27, "Rospo", [], "", []));
tree.creatures.push(new EvolutionStage(28, "Salamandra", [], "", []));
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