
class Pes {
    constructor(jmeno, rasa, steka, kouse, vek) {
        this.jmeno = jmeno;
        this.rasa = rasa;
        this.steka = steka;
        this.kouse = kouse;
        this.vek = vek;
    }

    hlidej() {
        console.log("Hlídám");
    }

    kousni() {
        if (this.kouse) {
            console.log("Vrrr, kousnul jsem tě do nohy.")
        } else {
            console.log("Já jsem hodnej, neumím kousat.");
        }
    }
}

const alik = new Pes("Alík", "jezevčík", false, true, 5);
const rexik = new Pes("Rex", "vlčák", true, false, 8);
const rafik = new Pes("Rafik", false, true, 3)