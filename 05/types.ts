// boolean true / false
let isOpen: boolean
isOpen = true

// string 'foo', "foo", `foo`
let message: string
message = `foo`

// number 0xff0 00110 1 0.2
let total: number
total = 20.3

// array
let items: string []
items = ['foo', 'bar']

let values: Array<number>
values = [ 1, 2, 3 ]

// tuple 
let title: [number, string]
title = [1, 'dois']

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa) NÃO É LEGAL
let coisa: any
coisa = [1]

// void (vazio)
function logger(): void {
    console.log('xuxu')
}

// null /  undefined
type Bla = string | number | boolean

// never
function error(): never {
    throw new Error("error")
}

// object
let cart: object
cart = {
    key: 'fi'
}