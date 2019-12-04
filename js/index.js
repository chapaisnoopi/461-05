// декларуємо змінні
// var - старе, не використовуємо
// let - звичайна зміна
// const - стала змінна
// Primitive data types
// Number
// String
// Boolean - true, false
// null - пусто
// underfiner - не визначено
// Odject - об'єкт
// Sumvol = унікальний незмінний індентифікатор



let bestGreetings = 'Hello';
alert(bestGreetings);
bestGreetings = 'JavaScript';
alert(bestGreetings);


const age = Number(prompt ('Enter yur age'));
alert('Your age is:' + age);

const nextAge = addOne(age);
alert('Next year you will be:' + nextAge);

// логічні оператори
// > < >= <= != !== == === || &&

if (age>=18) {
    alert ('ти повнолітній')
} else {
    alert ('ти неповнолітній')
}

function addOne(num) {
    const increremented = num + 1;
    return increremented;
}




