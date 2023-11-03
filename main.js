const array = [];
const arrayLength = prompt('Введіть кількість елементів:');

for (let i = 0; i < arrayLength; i++) {
  const item = prompt(`Введіть елемент No.${i + 1}:`);
  array.push(item);
}

console.log('Ви ввели: ' + array.join(', '));

array.sort();
console.log('Елементи відсотровані за порядком: ' + array.join(', '));

array.splice(1, 4);
console.log('Без елементів з 2 по 4: ' + array.join(', '));
