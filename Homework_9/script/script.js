
let _num_1 = +prompt('enter the number','0');

if(_num_1 >= 0){
    console.log(_num_1**3);
}
else
{
console.log(_num_1**2);
}


let _num_3 = +prompt('количество стульев в кабинете','0');
let _num_2 = +prompt('количество учеников в классе','0');


if(_num_3 >=_num_2)
{
console.log("стульев хватает");
}
else{
    console.log("стульев не хватает");
}



let _arr_users = ['John', 'Bob', 'Tom', 'Nick', 'Sam', 'Alex', 'Jack'];

console.log(_arr_users[_arr_users.length - 2]);
console.log(_arr_users[0]);


console.log(_arr_users.length);
_arr_users.shift();
console.log(_arr_users[0]);
console.log(_arr_users.length);
_arr_users.push('Landon');
console.log(_arr_users[_arr_users.length - 1]);
console.log(_arr_users.length);
_arr_users[3]='Den';
console.log(_arr_users[3]);
console.log(_arr_users.length);
_arr_users.pop();
console.log(_arr_users.length);









// Изменение значения элемента
// fruits[2] = 'Pear';
// console.log(fruits);

// Задание: 
// 1. Создайте массив styles с элементами «Джаз» и «Блюз». 
// 2. Добавьте «Рок-н-ролл» в конец. 
// 3. Замените значение в середине на «Классика». 
// 4. Удалите первый элемент массива.
// 5. Вставьте Рэп и Регги в начало массива.

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[1] = 'Классика';
// styles.shift();
// styles.unshift('Рэп', 'Регги');
// console.log(styles);