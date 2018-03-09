class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    toString() {
        return `${this.name}: ${this.description}`;
    }
}

let events = {
    food: [
        new Event("Abbondanza",
            "Ogni giocatore aggiunge 5 unitá di cibo alla riserva nel modo in cui vuole"),
        new Event("Fame",
            "Le creature consumano un cibo extra"),
        new Event("Cannibalismo",
            "Ogni specie puó mangiare le proprie creature oltre al normale cibo richiesto"),
        new Event("Adattamento",
            "Le creature consumano un cibo in meno, ma non meno di 1"),
    ],
    mating: [
        new Event("Fertilitá",
            "La riproduzione genera una creatura extra"),
        new Event("Sexy",
            "Ogni giocatore puó giocare una fase Riproduzione extra durante il proprio turno"),
        new Event("Incidente",
            "Ogni giocatore DEVE far riprodurre tutte le proprie creature durante la fase di Riproduzione"),
        new Event("Avanzamento della specie",
            "Ogni giocatore conteggia anche le creature avversarie come proprie durante la fase di Riproduzione"),
    ],
    life:[
        new Event("Moria",
            "Ogni giocatore distrugge 3 delle proprie creature"),
        new Event("Antenati",
            "Ogni giocatore puó generare fino a 2 creature semplici all'inizio del proprio turno invece di 1"),
        new Event("Duro a morire",
            "L'insufficienza di cibo causa una morte in meno, ma non meno di 1"),
        new Event("La legge del piú forte",
            "Ogni giocatore distrugge metá della propria popolazione di una specie che controlla"),
    ],
    evolution:[
        new Event("Involuzione",
            "Ogni giocatore retrocede 3 delle proprie creature di un livello evolutivo"),
        new Event("Sforzo evolutivo",
            "Ogni giocatore sceglie un Tratto Evolutivo dagli scarti e lo aggiunge alla propria riserva"),
        new Event("Gene debole",
            "Ogni giocatore scarta un Tratto Evolutivo dalla propria riserva"),
        new Event("Mutazione",
            "Ogni giocatore scarta i propri Tratti Evolutivi dalla propria riserva e ne pesca lo stesso numero"),
    ],
    other:[
        new Event("Meteora",
            "Ogni giocatore gioca un ultimo turno, quindi la partita termina")
    ],
    total(){
        return this.evolution.length+this.food.length+this.life.length+this.mating.length+this.other.length;
    }
};

module.exports = events;