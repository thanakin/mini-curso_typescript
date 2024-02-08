// generics

/*
    S => State
    T => Type
    K => Key
    V => Value
    E => Element
*/

type numOrStr = number | string

function useState<S extends numOrStr = string>() {
    // S extends numOrStr define o generics: tipos possiveis
    // = string define o default, como string
    let state: S

    function getState() {
        return state
    }

    function setState(newState: S) {
        state = newState
    }

    return { getState, setState }
}


const newState = useState()

newState.setState("oi") // uma vez que foi inserido uma string...
console.log(newState.getState())

//newState.setState(727) // ... nao deve aceitar um number. e vice-versa.
//console.log(newState.getState())