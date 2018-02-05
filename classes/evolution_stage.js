class EvolutionStage {
    constructor(id, name, food, evolutions, requiredTraits) {
        this.id = id;
        this.name = name;
        this.food = (food !== undefined && food != "") ? food : null;
        this.evolutions = (evolutions !== undefined && evolutions != "") ? evolutions : null;
        this.requiredTraits = (requiredTraits !== undefined && requiredTraits != "") ? requiredTraits : null;
    }

    getString() {
        let output = this.id + ")" + this.name + " ";
        return output;
    }
}

module.exports = EvolutionStage;