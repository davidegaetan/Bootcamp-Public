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



const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkShake();
ninja1.showStats();
