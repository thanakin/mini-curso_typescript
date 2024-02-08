"use strict";
// generics
function useState() {
    // S extends numOrStr define o generics: tipos possiveis
    // = string define o default, como string
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
newState.setState("oi"); // uma vez que foi inserido uma string...
console.log(newState.getState());
//newState.setState(727) // ... nao deve aceitar um number. e vice-versa.
//console.log(newState.getState())
