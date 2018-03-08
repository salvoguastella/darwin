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
            "All'inizio del proprio turno, ogni giocatore aggiunge 3 unitá di cibo alla riserva nel modo in cui vuole"),
        new Event("Fame",
            "Le creature consumano un cibo extra"),
        new Event("Cannibalismo",
            "Ogni specie puó mangiare le proprie creature oltre al normale cibo richiesto"),
        new Event("Adattamento",
            "Le creature consumano un cibo in meno, ma non meno di 1"),
    ],
    mating: [
        new Event("Fertilitá",
            "L'accoppiamento genera una creatura extra"),
        new Event("Sexy",
            "Ogni giocatore puó giocare una fase Accoppiamento extra durante il proprio turno"),
        new Event("Incidente",
            "Ogni giocatore DEVE far accoppiare tutte le proprie creature durante il proprio turno"),
    ],
    life:[
        new Event("Moria",
            "Ogni giocatore distrugge 3 delle proprie creature"),
        new Event("Antenati",
            "Ogni giocatore puó generare fino a 2 creature semplici all'inizio del proprio turno invece di 1"),
        new Event("Duro a morire",
            "L'insufficienza di cibo non causa enstinzione"),
    ],
    evolution:[
        new Event("Involuzione",
            "Ogni giocatore retrocede 3 delle proprie creature di un livello evolutivo"),
        new Event("Sforzo evolutivo",
            "Ogni giocatore sceglie un Tratto Evolutivo dagli scarti e lo aggiunge alla propria riserva"),
        new Event("Gene debole",
            "Ogni giocatore scarta un Tratto Evolutivo dalla propria riserva"),
    ],
    other:[
        new Event("Meteora",
            "Ogni giocatore gioca un ultimo turno, quindi la partita termina")
    ]
};

module.exports = events;