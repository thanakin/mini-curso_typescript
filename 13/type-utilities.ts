type Todo = {
    title: string
    description: string
    completed: boolean
}

//// Readonly
const todo: Readonly<Todo> = { // Readonly torna itens somente leitura
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false
}

console.log(todo)
//todo.completed = true
//console.log(todo)


//// Partial
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){ // Partial deixa todas as propriedade como popcionais
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true})
console.log(todo2)


//// Pick: pega propriedades
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Terminar Ghost of Tsushima",
    completed: false
}


//// Omit: esconde propriedades
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview = {
    title: "Terminar Ghost of Tsushima",
    completed: false
}