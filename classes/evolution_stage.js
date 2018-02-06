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

    getDiet(){
        const diets = ["erbivoro", "onnivoro", "carnivoro"];
        let diet = undefined;

        if(typeof this.food === "object" && this.food !== null){
            this.food.forEach(id => {
                if(diet === undefined){
                    if(id < 0) diet = 0;
                    else diet = 2;
                }
                else{
                    if((diet == 0 && id >= 0) || (diet == 2 && id < 0)) diet = 1;
                }

            });
        }
        else diet = 0;

        return diets[diet];
    }
}

module.exports = EvolutionStage;