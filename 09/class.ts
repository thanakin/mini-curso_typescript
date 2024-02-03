// class modifier: public, protected, private, readonly

class UserAccount {
    public name: string
    protected age: number

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

class CharAccount extends UserAccount {
    private nickname: string
    level: number

    constructor (name:string, age: number, nickname: string, level: number) {
        super(name, age)

        this.nickname = nickname
        this.level = level
    }

    // class acessors
    get getLevel() {
        console.log('-- GET --')
        return this.level
    }

    set setlevel(level:number) {
        this.level = level
    }


    logCharDetails(): void {
        console.log(
            `The player ${this.name} is ${this.age} has the char ${this.nickname} at level ${this.level}`
        )
    }
}

const celo = new UserAccount('Marcelo', 12)
console.log(celo)
//console.log(celo.age)
celo.logDetails()

const john = new CharAccount("John", 45, "johnmaster", 80)
console.log(john)
john.logDetails()

//john.nickname = "johnNoob"
console.log(john)
console.log(john.level)
john.logCharDetails()

john.setlevel = 499
console.log(john.getLevel)