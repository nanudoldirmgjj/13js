/*
Задание 1

1) Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.
С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).
Добавить эти объекты в массив shops.
В итоге должен получиться массив объектов типа:
[{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]
2) С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:
['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']
*/

function Shop(title, address) {
    this.title = title;
    this.address = address;
    this.getDescription = function () {
        return `${this.title}, ${this.address}`
    };
}

let Green = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
let Dodo = new Shop('Dodo', 'пр-т Дзержинского, 126, Минск');
let shops = [Green, Dodo];
console.log(Green.getDescription());
console.log(Dodo.getDescription());

let vals = shops.map(function (a) { return a.address; });

/*
Задание 2

По данному url расположена задача:
https://jsonplaceholder.typicode.com/todos/1

В html предусмотреть <div></div>
Достать с сервера заголовок задачи и отобразить его в div.
*/

const http1 = new XMLHttpRequest();

http1.addEventListener('load', () => {
    let title = JSON.parse(http1.responseText);
    let div = document.querySelector('div');
    div.innerHTML = title.title;
})

http1.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
http1.send();

/*
Задание 3

Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.

Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.
*/
function createLi(tasks, ul, i1) {
    for (let i = 0; i < i1; i++) {
        let li = document.createElement('li');
        li.innerHTML = tasks[i].title;
        ul.appendChild(li);
    }
}

const http2 = new XMLHttpRequest;
http2.addEventListener('load', () => {
    let tasks = JSON.parse(http2.responseText);
    let ul = document.createElement('ul');
    createLi(tasks, ul, 20);
    document.body.append(ul);
})
http2.open('GET', 'https://jsonplaceholder.typicode.com/todos');
http2.send();


/*
Задание 4

Отобразить на странице 10 первых комментариев с сервера https://jsonplaceholder.typicode.com/comments
Оформить тегами как в ПРИМЕРЕ.
Порядок работы:
1) записать в переменную блок для отрисовки результата.
2) описать функцию отрисовки результата (напр. addInfo). Функция принимает 3 параметра - тег, содержимое и название класса для CSS. Она создает тег, наполняет его текстом, добавляет класс и помещает в блок на страницу
3) создать http-запрос и получить результат в виде массива объектов (через JSON.parse). Записать этот результат в переменную, т.к. с ним будем дальше работать.
4) внутри функции .onload:
- обойти через цикл первые 10 элементов массива
- вызвать функцию addInfo 3 раза: для добавления на страницу имени, имейла и комментария.
5) прописать CSS для классов.
*/

const http3 = new XMLHttpRequest;
let ele = document.createElement('a');
ele.innerHTML = 'i';


function createBlock(tag, info, clas) {
    let element = document.createElement(tag);
    element.innerHTML = info;
    element.classList.add(clas);
    return element;
}

http3.addEventListener('load', () => {
    let task = JSON.parse(http3.responseText);
    let div = document.createElement('div');
    div.classList.add('result');
    for (let i = 0; i < 10; i++) {
        div.append(createBlock('h3', task[i].name, 'name'));
        div.append(createBlock('p', task[i].email, 'email'));
        div.append(createBlock('p', task[i].body, 'body'));
    }

    document.body.append(div);
    const email = document.querySelectorAll('.email');
    email.forEach(e => e.style.fontStyle = 'italic');
})

http3.open('GET', 'https://jsonplaceholder.typicode.com/comments');
http3.send();


