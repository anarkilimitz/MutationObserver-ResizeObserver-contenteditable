'use strict';

const box = document.querySelector('.box');

// создаём объект, который будет следить
let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
});

observer.observe(box, {
childList: true
});

observer.disconnect(); // отменить отслеживание

//-------- Функции-конструкторы ----------------------

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28); // создаем объект
const alex = new User('Alex', 20);

ivan.exit();
ivan.hello();
alex.hello();

console.log(ivan); // проверка
console.log(alex);

// Test