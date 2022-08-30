class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        return this.name;
    }

    showStats(){
        console.log(`My name is ${this.name}, I have a health of ${this.health}. My speed is ${this.speed}, and my strength is ${this.strength}.`);
    }

    drinkSake(){
        return this.health += 10;
    }
}

const n1 = new Ninja("Chuck Noris", 1000);
console.log(n1.sayName());
console.log(n1.drinkSake());
n1.showStats();


class Sensei extends Ninja{
    constructor(name, wisdom= 10){
        super(name, 200, 10, 10, wisdom)
        this.wisdom = wisdom;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("Man who stands on toilet is hight on pot");
    }

    showStats(){
        super.showStats()
        console.log(`I have the wisdom of ${this.wisdom} dragons`);

    }
}

const sen1 = new Sensei("David Lo Pan");

console.log(sen1.sayName());
sen1.speakWisdom();
sen1.showStats()
console.log(sen1.name);

