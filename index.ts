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

// when to annotate the type manually? WHY WE DO THIS?
// rely on type inference as much as we can 
// but there are specific situations when we want to annotate

// 1. When a function returns the ANY type 
// 

const json = '{ "x": 10, "y": 20 }'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)
// JSON.parse() returns ANY type because it really depends on what the input is 
// ie: JSON.parse('false')  will return boolean 
// ie: JSON.parse('4') will return number 
// ie: JSON.parse('{'whateverkey': 'whatevervalue'}') will return Object

// 2. When declaring variable and initializing later 
// ie: 
// let something; 
// something = 3

let words = ['red', 'green', 'blue']
let foundWord: boolean;  
// let foundWord; 
for (let i = 0; i < words.length; i++) {
    if (words[i] == 'green') {
        foundWord = true 
    }
}

// basically seems like ts doesn't like ANY 

// 3. When type can't be easily inferred even when the declaration/initialization is on same line 
// 
// in this specific situation we're gonna use a | to indicate OR aka between two types
// obvo this bad example but still 
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false 
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}


// better ways to annotate functions 
// prev example was for the variable that's defined function 
// this time, how to annotate a function itself 

// ts will try to figure out the return type of a function as inference 
// but it won't try to figure out the input because there's no logical way to do that 

const add = (a: number, b: number): number => {
    return a + b
}

// ts can infer the return type but it's better to annotate it so we have the safeguards 
// literally the reason we use ts 
// do it 
const subtract = (a: number, b: number): number => {
    return a - b
}

function divide(a: number, b: number): number {
    return a / b
}

const multiply = function (a: number, b: number): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message) 
    // return null or return undefined 
    // basically void means no return VALUE 
}

// this cool, never gonna reach the end of the function because it'll exit on new Error 
// this is rare 
const throwError = (message: string): never => {
    throw new Error(message)
}

const forecast = {
    date: new Date(), 
    weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
}

logWeather(forecast)


//ES2015
const logTheWeather = ({date, weather}) => {
    console.log(date) 
    console.log(weather)
}

// {date, weather} is destructuring {date: Date, weather: string} is the anotation
const logTheWeatherTwo = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date) 
    console.log(weather)
}



// Doing Objects 
const profile = {
    name: 'alex', 
    age: 20, 
    coords: {
        lat: 0, 
        lng: 15
    }, 
    setAge(age: number): void {
        this.age = age
    }
}

// exercise in destructuring 
// the annotation came after the normal destructuring 
const { age }: { age: number } = profile 


// lat long 
// const { coords: { lat, lng } } = profile
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile
