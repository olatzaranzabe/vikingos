// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health = this.health - damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    vikingArmy = [];

    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        this.saxonArmy[0].health =
            this.saxonArmy[0].health - this.vikingArmy[0].strength;

        if (this.saxonArmy[0].health <= 0) {
            this.saxonArmy.pop();
            return `A Saxon has died in combat`;
        }
    }
    saxonAttack() {
        let viking = this.vikingArmy[
            Math.floor(Math.random() * this.vikingArmy.length)
        ];
        let saxon = this.saxonArmy[
            Math.floor(Math.random() * this.saxonArmy.length)
        ];
        // let vikingNewHealth = viking.health - saxon.strength;
        let result = viking.receiveDamage(saxon.strength);

        if (viking.health <= 0) {
            this.vikingArmy.pop();
            return `A Viking has died in combat`;
        }
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (
            this.saxonArmy.length !== 0 &&
            this.vikingArmy.length !== 0
        ) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
        return "Saxons have fought for their lives and survived another day...";
    }
}
