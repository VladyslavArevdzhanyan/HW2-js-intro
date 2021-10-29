console.log('------------- # 5')
let a = 30;
let b = 40;
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;
console.log(c);
console.log(d)
console.log(e)
console.log(f)

console.log('------------- # 6')
for (let i = 1; i < 6; i++) {
    console.log(i);
}

console.log('------------- # 7')
for (let i = 5; i > 0; i--) {
    console.log(i);
}


console.log('------------- # 8')
function getMarkInfo(condition) {
    if (condition === 10) {
        console.log('У вас максимальный балл')
    } else {
        console.log('У вас средний балл')
    }
   }
   getMarkInfo(10)
   getMarkInfo(1)

   console.log(getMarkInfo(10));
   console.log(getMarkInfo(1));


console.log('------------- # 9')   
function getDayInfo(position) {
    switch(position) {
        case 0:
            console.log('Sunday');
        break;
        case 1:
            console.log('Monday');
        break;
        case 2:
            console.log('Tuesday');
        break;
        case 3:
            console.log('Wednesday');
        break;
        case 4:
            console.log('Thursday');
        break;
        case 5:
            console.log('Friday');
        break;
        case 6:
            console.log('Saturday');
        break;
        default :
            console.log('Wrong data');
        break;
    }
}

console.log(getDayInfo(0));
console.log(getDayInfo(1));
console.log(getDayInfo(2));
console.log(getDayInfo(3));
console.log(getDayInfo(4));
console.log(getDayInfo(5));
console.log(getDayInfo(6));
console.log(getDayInfo(7));


console.log('------------- # 10')
let arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
console.log(arr);

console.log('------------- # 11')
let array = [1, 2, 3];
let array_second = [4, 5, 6];
let array_concat = array.concat(array_second);
console.log(array_concat);





console.log('------------- # 12')
let a = 0;
let info = 'Допустимо целое положительное число';

function countNumber(number) {
    if (number < 0) {
        console.log(info);
    } else if (Number.isInteger (number)) {
        for (let i = 1; i <= number; i++) {
            a += i;
        }
        console.log(a)
    } else {
        console.log(info);
    }
}

console.log(countNumber(3));