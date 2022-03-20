import axios from 'axios'

import ITodo from './interface/ITodo'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(response => {
    console.log(response.data)
    const todo: ITodo = response.data 
    // const todo = response.data as ITodo

    const id = todo.id
    const title = todo.title
    const completed = todo.completed 

    logTodo(id, title, completed)

})

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID: ${id} 
        Has a title of: ${title}
        Is it completed? ${completed}
    `)
}

let apples: number = 5 
let speed: string = 'fast'
let hasName: boolean = true 

// this weird yo
let nothingMuch: null = null 
let nothing: undefined = undefined 

// built in objects 
// Date is a built in class/object 
let now: Date = new Date 

// Array 
let colors: string[] = ['white', 'yellow', 'red', 'blue']
let myNumber: number[] = [1, 2, 3, 4, 5]
let truths: boolean[] = [true, true, true, false]

// Classes 
class Car {

}
let car: Car = new Car()

// Object literal 
// seperate with ; 
let point: { x: number; y: number; } = {
    x: 10, 
    y: 20
}

// function 
// nasty 
const logNumber: (i: number) => void = (i) => {
    console.log(i)
}