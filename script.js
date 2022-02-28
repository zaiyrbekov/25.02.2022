// document.querySelector('select').addEventListener('input', function() {
//   const value = this.value;
//   document.querySelectorAll('ul').forEach(function(ul) {
//     if(value === ul.id) {
//       ul.className = '';
//     }
//     else {
//       ul.className =  'hidden';
//     }
//   });
// });

// (param1, param2, paramN) => expression
// ES5
// var add = function(x, y) {
//   return x + y;
// };
// ES6
// let add = (x, y) => { return x + y };

// document.querySelector('select').addEventListener('input', function() {
//   document.querySelectorAll('ul').forEach(
//     ul => ul.classList.toggle('hidden', this.value !== ul.id)
//   );
// });

// document.body.classList.add('hello');
// document.body.classList.remove('hello');

// document.body.classList.toggle('hello');
// document.body.classList.toggle('hello', 4 > 4); // check

// if (document.body.classList.contains('bye')) { // true/false

// }

// document.body.classList.replace('hello', 'bye');

// document.body.className = document.body.className === 'hello' ? '' : 'bye';

// const articles = [
//   {
//     id: "article-1",
//     title: "hello world",
//     image: "images/photo.jpeg",
//     body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo magni iusto laboriosam voluptatem et laudantium? Eveniet veritatis temporibus error! Molestias eveniet ratione labore ducimus odio eius vero autem. Vero, ducimus."
//   },
//   {
//     id: "article-2",
//     title: "hello world",
//     image: "images/photo.jpeg",
//     body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo magni iusto laboriosam voluptatem et laudantium? Eveniet veritatis temporibus error! Molestias eveniet ratione labore ducimus odio eius vero autem. Vero, ducimus."
//   },
//   {
//     id: "article-3",
//     title: "hello world",
//     image: "images/photo.jpeg",
//     body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo magni iusto laboriosam voluptatem et laudantium? Eveniet veritatis temporibus error! Molestias eveniet ratione labore ducimus odio eius vero autem. Vero, ducimus."
//   }
// ];

// const main = document.querySelector('main');
// articles.forEach(article => {
//   const article = document.createElement('article');
//   const h1 = document.createElement('h1');
//   const img = document.createElement('img');
//   const p = document.createElement('p');

//   articleElement.id = article.id;
//   h1.textContent = article.title;
//   img.src = article.image;
//   p.textContent = article.body;

//   article.append(h1);
//   article.append(img);
//   article.append(p);
//   main.append(articleElement);
// })

// const articles = [
//   {
//     id: "article-1",
//     title: "Hello world",
//     image: "./photo.jpg",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
//   },
//   {
//     id: "article-2",
//     title: "Hello world",
//     image: "./photo.jpg",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
//   },
//   {
//     id: "article-3",
//     title: "Hello world",
//     image: "./photo.jpg",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
//   }
// ];

// const main = document.querySelector('main');
// articles.forEach(article => {
//   const articleElement = document.createElement('article');
//   const h1 = document.createElement('h1');
//   const img = document.createElement('img');
//   const p = document.createElement('p');

//   articleElement.id = article.id;
//   h1.textContent = article.title;
//   img.src = article.image;
//   p.textContent = article.body;

//   articleElement.append(h1);
//   articleElement.append(img);
//   articleElement.append(p);
//   main.append(articleElement);
// })

// // document.location.assign("")

let fruist = ["apple", "banana",
    false, 13,
    "hello"["1", "2", "3"],
    { name: "Peter", lastName: "Parcker" },
    12345]
fruist.forEach(e => console.log(typeof e));


let people = [
  {
    name: "Parker",
    lastname: "Peter",
    age: 34
  },
  {
    name: "Laslay",
    lastname: "Jhonson",
    age: 55
  },
  {
    name: "Sadyr",
    lastname: "Japarov",
    age: 44
  },
  {
    name: "Elon",
    lastname: "Mask",
    age: 51
  },
  {
    name: "Sam",
    lastname: "Crus",
    age: 11
  }

  

]

let container = document.querySelector("#container");
people.forEach((item)=>{
  let person = document.createElement("div");
  let name = name.item;
  let lastname = lastname.item;
  let age = age.item;

  person.append(name);
  person.append(lastname);
  person.append(age);
  container.append(person);
});
