// fetch() api in javaScript

// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then(raw=> raw.json())
// .then(data=> console.log(data))
// .catch(err=> console.log("Could not load the data!"))


// axios() in javaScript

// const ul = document.querySelector("ul")

// axios.get(`https://jsonplaceholder.typicode.com/users`)
// .then(myData => { 
//     let users = myData.data;
//     users.forEach(user=>{
//         let li = document.createElement("li");
//         li.textContent = user["name"];
//         ul.appendChild(li)
//     })
    
// })



// Callback Demo.

// function asy(url, callback){
//     axios.get(url)
//     .then(result => callback(result)) // callback calling.
// }

// asy("https://jsonplaceholder.typicode.com/users", function(res){
//     console.log(res.data)
// })


// Promises Demo

// function fetchData(url){
//     let promise = new Promise((resolve, reject)=>{
//         fetch(url)
//         .then(raw=>raw.json())
//         .then(result=> resolve(result))
//         .catch(err=> reject(err))
//     })

//     return promise;
// }

// var promise = fetchData("https://jsonplaceholder.typicode.com/users")
// promise
// .then(finalData => console.log(finalData))
// .catch(err=> console.log(err))


// async-await Demo

// async function dataFetcher(url){
//     let data = await fetch(url);
//     let result = await data.json()
//     return result;
// }


// async function getData(){
//     const data = await dataFetcher("https://jsonplaceholder.typicode.com/users")
//     console.log(data);
// }

// getData()


// Generator

