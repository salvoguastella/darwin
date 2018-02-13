class Requirement {
    constructor(id, quantity) {
        this.id = id;
        this.quantity = quantity
    }
}

class Objective {
    constructor(points, requirements) {
        this.points = points;
        this.requirements = [];
        if (requirements !== undefined && requirements != "" && typeof requirements === "object") {
            requirements.forEach(r => {
                this.requirements.push(new Requirement(r.id, r.qty));
            });
        }
    }
}

module.exports = Objective;