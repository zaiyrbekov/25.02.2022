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

// let fruits = ['apple', 'banana', 'qiwi', 'peach'];
// fruits.forEach(element => {
//   console.log(element);
// });

// let fruits = ['apple',
//   'banana',
//   false,
//   13,
//   'hello',
//   ['1', '2', '3'],
//   { name: 'JK', lastname: 'Jeon'},
//   12345];
// fruits.forEach((item) => {
//   console.log(typeof item);
// });

// let biases = [
//   {
//     name: 'Taehyung',
//     lastName: 'Kim',
//     age: 26
//   },
//   {
//     name: 'Lucas',
//     lastName: 'Wong',
//     age: 24
//   },
//   {
//     name: 'Jisung',
//     lastName: 'Han',
//     age: 22
//   },
//   {
//     name: 'Hoseok',
//     lastName: 'Jung',
//     age: 28
//   }
// ];
// let container = document.querySelector('#container');
// container.style.border = '1px solid black';
// container.style.padding = '5px';
// biases.forEach((item) => {
//   let person = document.createElement('div');
//   person.style.padding = '3px';
//   let name = `${item.name}, `;
//   let lastName  = `${item.lastName}, `;
//   let age  = item.age;
//   person.append(name);
//   person.append(lastName);
//   person.append(age);
//   container.append(person);
// }
// )


let base = [{
  name: "Ivan",
  age: "Age 22",
  img: "https://st2.depositphotos.com/4431055/7495/i/600/depositphotos_74950191-stock-photo-men-latin-american-and-hispanic.jpg",
  profession: "Profession: It-specialist",
  resume: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est, alias laboriosam voluptatem neque fugit quasi quos sit obcaecati magnam! Dolor dolorem consequuntur quas cupiditate eos voluptates quae nemo esse!"
},
{
  name: "Clara",
  age: "Age 19",
  img: "https://bigpicture.ru/wp-content/uploads/2018/12/100faces00.jpg",
  profession: "Profession: front-end specialist",
  resume: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est, alias laboriosam voluptatem neque fugit quasi quos sit obcaecati magnam! Dolor dolorem consequuntur quas cupiditate eos voluptates quae nemo esse!"
},
{
  name: "Idai",
  age: "Age 19",
  img: "https://www.komarov.design/content/images/2020/11/image-4.jpeg ",
  profession: "Profession: It-specialist",
  resume: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est, alias laboriosam voluptatem neque fugit quasi quos sit obcaecati magnam! Dolor dolorem consequuntur quas cupiditate eos voluptates quae nemo esse!"
}
]
let container = document.querySelector("#container")
container.style.display = "flex";



base.forEach((item) => {
let div = document.createElement("div")
div.style.width = "250px";
div.style.border = "2px solid gray"
div.style.borderRadius = `20px`;
div.style.margin = "10px";

let article = document.createElement("article")
article.style.margin = "10px"
let imgs = document.createElement("img")
imgs.style.minWidth = '168px'
imgs.style.height = '168px'
imgs.style.borderRadius = '50%'
imgs.style.display = "block"
imgs.style.margin = "0 30px"
let person = document.createElement("h2");
person.style.textAlign = "center"
let ages = document.createElement("span")
let pro = document.createElement("h4")
let para = document.createElement("p")


imgs.setAttribute('src', item.img)
let name = item.name;
let age = item.age;
let profession = `${item.profession }, `;
let resume = `${item.resume}, `;


person.append(name);
imgs.append();
ages.append(age);
pro.append(profession);
para.append(resume);
article.append(imgs, person, ages, pro, para);
div.append(article);
container.append(div);

})