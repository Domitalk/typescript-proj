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