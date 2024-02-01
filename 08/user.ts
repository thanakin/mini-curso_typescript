// accountInfo
// charInfo
// playerInfo


type AccountInfo = {
    id: number,
    name: string,
    email?: string
}

const account: AccountInfo = {
    id: 123,
    name: 'Marcelo',
    email: 'marcelo@email.com'
}


type CharInfo = {
    nickname: string,
    level: number
}

const char: CharInfo = {
    nickname: 'thanakin',
    level: 100
}


// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: "Jao",
    nickname: 'jao_cunha',
    level: 10
}