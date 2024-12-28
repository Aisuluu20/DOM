// let title = document.querySelector("h1");

// title.innerHTML = "<span>world</span>"; //+
// title.innerText = "<span>world</span>";
// title.textContent = "<span>world</span>";

// console.log(title.innerHTML);
// console.log(title.innerText);
// console.log(title.textContent);

// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.
// let task1 = document.querySelector("a");
// console.log(task1.textContent);

// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
// let task2 = document.querySelector("a");
// let newArr = Array.from(task2);
// console.log(
//   newArr.map((el) => {
//     return el.innerHTML;
//   })
// );

// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом navlinkitem
// let task3 = document.querySelectorAll(".navlinkitem");
// let res = Array.from(3);
// console.log(res.map((el) => el.innerHTML));

// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов элементов
//  с классом navlinkitem
// let task4 = document.querySelectorAll(".navlinkitem");
// let newArr = Array.from(task4);
// console.log(
//   newArr.map((el) => {
//     return el.getAttribute("href");
//     // return el.setAttribute("id", "main");
//   })
// );

// Task 5
// Напишите функцию, которая вернет массив со значениями атрибута data-link внутри тэгов
// элементов с классом nav__link .
// let task5 = document.querySelectorAll(".nav__link");
// let res = Array.from(task5);
// console.log(
//   res.map((el) => {
//     return el.getAttribute("data-link");
//   })
// );

// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно, по правилам
// внутри элемента с классом nav__link должен быть текст порядкового номера индекса. И у
// этого же элемента должен быть класс с текстовым номером индекса.
// Например
// <a class="nav__link  first" data-link="1">first</a>
// Но база данных была повреждена и по ошибке некоторые элементы стали отображаться с некорректно.
// <a class="nav__link  zero" data-link="0">first</a>
// Ваша задача вернуть массив атрибутов data-link у элементов, у которых сломана логика. То
//  есть текст внутри не имеет соответствующего класса.
// Используйте map для обхода массива. Иными словами элемент считается сломанным если в
//  классах не содержится текста элемента.

// let task6 = document.querySelectorAll(".nav__link");
// let res = Array.from(task6);
// console.log(
//   res.map((el) => {
//     // return el.classList[0];
//     // return el.className;
//   })
// );

// Task 7
// Обновите текст всех элементов с классом nav__link , по следующему шаблону
// <a href="#" class="nav__link zero" data-link="0">zero</a>
// Стало
// <a href="#" class="nav__link zero" data-link="0"> 0 zero</a>
// <a href="#" class="nav__link first" data-link="1">five</a>
// Стало
// <a href="#" class="nav__link first" data-link="1">1 first</a>
// То есть ${data-link
// Используйте forEach
// yourElementsArray.forEach((element) => {
// })
// let task7 = document.querySelectorAll(".navlinkitem");
// task7.forEach((el, idx, arr) => {
//   el = `<a href="#" class="nav__link ${el.classList}" data-link="${idx}">${idx}${el.classList}</a>`;
//   console.log(el);
// });

// Task 8
// Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на
//  странице. Для удаления используйте forEach.
// Что бы удалить элемент из DOM - используйте метод .remove()
// yourElementsArray.forEach((element) => {
// })
// let task8 = document.querySelectorAll(".nav__link");
// task8.forEach((el) => {
//   if (el.classList[1] !== el.innerHTML) {
//     el.remove();
//   }
// });
// let task8 = document.querySelectorAll(".nav__link");
// task8.forEach((el) => {
//   if (el.classList[0] !== el.innerHTML) {
//     el.remove();
//   } else {
//     el.innerHTML;
//   }
// });
