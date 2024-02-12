let elem = document.querySelector('.wrap');

let posts = document.querySelector('.posts');
let comments = document.querySelector('.comments');
let users = document.querySelector('.users');

let posts_create = document.querySelector('.posts_create');

let posts_body = 
{
    "title": "Title-Test",
    "body": "Body-Test: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit placeat, aut repudiandae quidem nam nostrum animi optio, sapiente velit adipisci tenetur repellat veniam? Voluptatem fuga doloremque similique, amet a molestias!    "
  }

let comments_body = 
{
  "name": "Lorem ipsum dolor",
  "email": "UserTest@mail.ru",
  "body": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, consequatur totam. Itaque sint porro velit omnis dolores libero voluptate reiciendis molestias quibusdam tenetur voluptatum suscipit doloribus, asperiores deleniti dolorem aut?"
}

let users_body = {
  "name": "UserTest",
  "username": "Tester",
  "email": "UserTest@mail.ru",
  "address": {
    "street": "Basik lets",
    "suite": "Bits. 910",
    "city": "Rooveres",
    "zipcode": "92274-9476",
    "geo": {
      "lat": "-39.8959",
      "lng": "28.6386"
    }
  },
  "phone": "8-900-203-94-98",
  "website": "Bassikes.olink",
  "company": {
    "name": "Luriest",
    "catchPhrase": "Multi-layered start test",
    "bs": "harness real-time e-markets"
  }
}

async function postComments(){
  let data = await fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(comments_body)
  });
  if (data.ok){
      let result = await data.json();
      alert("Коментарий создан: " + JSON.stringify(result));
      console.log("Коментарий создан: " + JSON.stringify(result));
};
}

async function postPosts(){
  let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(posts_body)
  });
  
  if (data.ok){
      let result = await data.json();
      alert("Пост создан: " + JSON.stringify(result));
      console.log("Пост создан: " + JSON.stringify(result));
};
}

async function postUsers(){
  let data = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(users_body)
  });
  if (data.ok){
      let result = await data.json();
      alert("Пользователь создан: " + JSON.stringify(result));
      console.log("Пользователь создан: " + JSON.stringify(result));
};
}

postUsers();
postPosts();
postComments();




async function getPosts(){
  let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET' 
  });
  if (data.ok){
      let result = await data.json();
      result.forEach(post => {
        posts.insertAdjacentHTML('beforeend', `<h4>${post.title}</h4>`); 
      });
  }
}

async function getUsers(){
  let data = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET' 
  });
  if (data.ok){
      let result = await data.json();
      result.forEach(user => {
        users.insertAdjacentHTML('beforeend', `<h4>${user.name}</h4>`); 
      });
  }
}

async function getComments(){
  let data = await fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'GET' 
  });
  if (data.ok){
      let result = await data.json();
      result.forEach(comment => {
        comments.insertAdjacentHTML('beforeend', `<h4>${comment.name}</h4>`); 
      });
  }
}

getComments();
getUsers();
getPosts();
