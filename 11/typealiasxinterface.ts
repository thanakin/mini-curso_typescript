// Type Alias

// definição
type GameT = {
    title: string
}

type DLCT = {
    extra: string
}

// intersection
type GameCollectionT = Game & DLCT & { content: boolean }

// implements
class CreateGameT implements GameCollectionT {}

// declarar função
type getSimilarsT = (title: string) => void

// = = = = = = Diferenças = = = = = = //

// permite declarar tipos primitivos
type IDT = string | number

// pode declarar tuplas normalmente
type TupleT = [number, number]

[1, 2] as TupleT

// apenas uma declaração por escopo

type JQueryT = { a:string}
//type JQueryT = { b:string}

// mais recomendado 
// na maioria das vezes
// React - Props

// CONSISTENCIA
































// Interfaces

// definição
interface GameI {
    title: string
}

type DLCI = {
    extra: string
}

// interseção | extend
interface GameCollectionI extends Game, DLCT {}

// implements
class CreateGameI implements GameCollectionI {}

// declarar função
interface getSimilarsI {
    (title: string): void
}

// = = = = = = Diferenças = = = = = = //

//interface ID extends number {}

// nao consigo definir Tuplas na interface
interface Tuple {
    0: number
    1: number
}

[1, 2, 3, "asdf"] as Tuple

// pode ter multiplas declarações e ele une de mesmo nome

interface JQueryI {
    a: string
}

interface JQueryI {
    b: string
}

const $: JQueryI = {
    a: "bla",
    b: "foo"
}

// vantagem: quando estiver criando libs, 
// prefira interfaces, por que são mais extensiveis!

// criando objetos/classes (POO)