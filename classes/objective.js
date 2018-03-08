class Requirement {
    constructor(id, multiplier) {
        this.id = id;
        this.multiplier = multiplier
    }
}

class Objective {
    constructor(points, requirements) {
        this.points = points;
        this.requirements = [];
        if (requirements !== undefined && requirements != "" && typeof requirements === "object") {
            requirements.forEach(r => {
                this.requirements.push(new Requirement(r.id, r.mul));
            });
        }
    }
}

module.exports = Objective;