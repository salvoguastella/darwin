class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    toString() {
        return `${this.name}: ${this.description}`;
    }
}

let events = [
    new Event("Abbondanza",
        "Ogni giocatore aggiunge 3 Piante/Funghi/Insetti alla riserva nel modo in cui vuole"),
    new Event("Fame",
        "Le creature consumano un cibo extra"),
    new Event("Involuzione",
        "Ogni giocatore retrocede 3 delle proprie creature di un livello evolutivo"),
    new Event("Moria",
        "Ogni giocatore distrugge 3 delle proprie creature"),
    new Event("Fertilitá",
        "L'accoppiamento genera una creatura extra"),
    new Event("Cannibalismo",
        "Ogni specie puó consumare le proprie creature oltre al normale cibo richiesto"),
    new Event("Sforzo evolutivo",
        "Ogni giocatore sceglie un Tratto Evolutivo dagli scarti e lo aggiunge alla propria riserva"),
    new Event("Gene debole",
        "Ogni giocatore scarta un Tratto Evolutivo dalla propria riserva"),
    new Event("Meteora",
        "Ogni giocatore gioca un ultimo turno, quindi la partita termina")
];

module.exports = events;