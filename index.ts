import axios from 'axios'

import ITodo from './interface/ITodo'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(response => {
    // console.log(response.data)
    const todo: ITodo = response.data 
    // const todo = response.data as ITodo

    const ID = todo.id
    const title = todo.title
    const finished = todo.completed 

    console.log(`
        The Todo with ID: ${ID} 
        Has a title of: ${title}
        Is it finished? ${finished}
    `)


})