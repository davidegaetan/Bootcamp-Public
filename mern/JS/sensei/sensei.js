class Ninja{
    constructor(name){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name, this.strength, this.speed, this.health);
    }
    drinkShake(){
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.sabiduria = 10;
    
    }

    speakWisdom(){
        console.log("Solo se que no se nada.");
        this.drinkShake();
    }


}

/*
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkShake();
ninja1.showStats();
*/


const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();

