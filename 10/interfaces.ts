// interfaces: conjunto de dados pra descrever um objeto

interface Game {
    title: string
    description: string
    readonly genre: string
    platform?: string[]
    getSimilars?: (title:string) => void
}

const tlou: Game = {
    title: "The Last Of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
}

console.log(tlou.genre)
if(tlou.getSimilars) {
    tlou.getSimilars(tlou.title)
}

interface DLC extends Game {
    originalGame: Game
    newContent: string[]
}

const letfbehind: DLC = {
    title: "The Last of Us - Left behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characteres"]   
}

// interface + class
class CreateGame implements Game {
    title: string
    description: string
    readonly genre: string

    constructor(t:string, d:string, g: string) {
        this.title = t
        this.description = d
        this.genre = g
    }
}