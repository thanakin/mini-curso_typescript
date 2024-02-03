"use strict";
// class modifier: public, protected, private, readonly
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    // class acessors
    get getLevel() {
        console.log('-- GET --');
        return this.level;
    }
    set setlevel(level) {
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} is ${this.age} has the char ${this.nickname} at level ${this.level}`);
    }
}
const celo = new UserAccount('Marcelo', 12);
console.log(celo);
//console.log(celo.age)
celo.logDetails();
const john = new CharAccount("John", 45, "johnmaster", 80);
console.log(john);
john.logDetails();
//john.nickname = "johnNoob"
console.log(john);
console.log(john.level);
john.logCharDetails();
john.setlevel = 499;
console.log(john.getLevel);
