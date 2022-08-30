class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        return this.name;
    }

    showStats(){
        console.log(`My name is ${this.name}, I have a health of ${this.health}. My speed is ${this.speed}, and my strength is ${this.strength}.`)
    }

    drinkSake(){
        return this.health += 10;
    }
}

const n1 = new Ninja("Chuck Noris", 1000);
console.log(n1.sayName());
console.log(n1.drinkSake());
n1.showStats();