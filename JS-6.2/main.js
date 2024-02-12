let elem = document.querySelector('.wrap')
let token = 'odgjoihdjfoti'

let newPost = {
    userId: 1,
    title: 'new title',
    body: 'new body Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus, doloribus vitae adipisci perspiciatis perferendis nemo, facilis recusandae aut eum, mollitia beatae minus iure deserunt laborum labore natus reiciendis esse! '
}

async function getData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts/3',{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authentication': `Barer ${token}` 
        },
        body: JSON.stringify(newPost)
    });
    if (data.ok){
        console.log(data.headers.get('Content-Type'))
        let todo = await data.json();
        // printInfo(todos)
        console.log(todo);
        elem.insertAdjacentHTML('beforeend',
        `<h2> ${todo.title} </h2>
        <p>  ${todo.body} </p>`)
    }
}

// function getData(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(data => data.json())
//         .then(todos => printInfo(todos))      
// }

function printInfo(todos){
    todos.forEach(todo => {
        return elem.insertAdjacentHTML('beforeend',
        `<h2> ${todo.title} </h2>`)
    })
}

getData()