// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20

const line = [];
for (i = 10; i <= 20; i++) {
	line.push(i);
}
alert(String(line))

// 2. Вивести квадрати чисел від 10 до 20.

for (h = 10; h <= 20; h++) {
	let sq = Math.pow(h,2);
	console.log(`${h} ^ 2 = ${sq}`);
}

// 3. Вивести таблицю множення на 7.

const table = [];
const a = 7;
let c;
for (b = 0; b <= 10; b++) {
	c = a*b;
  table.push(String(`\n ${a} x ${b} = ${c}`))
}
alert(`Таблиця множення на ${a}: \n ${table}`)

// 4. Знайти суму всіх цілих чисел від 1 до 15.

let d = 1;
let sumd = 0;
while (d <= 15) {
	sumd = sumd + d
  d++;
}
console.log(sumd)

// 5. Знайти добуток усіх цілих чисел від 15 до 35.

let e = 1;
let multie = 15;
while (e <= 35) {
	multie = multie * e
  e++;
}
console.log(multie.toLocaleString())

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let f = 1;
const fmax = 500;
let sumf = 0;
do {
	sumf = sumf + f;
	f++;
} while (f <= fmax);
const resultf = sumf/fmax;  
console.log(resultf);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

const arrow = [];
let numb = 30;
for (i = numb; i <= 80; i++) {
	if (i % 2 == 0) {
  arrow.push(i);
  numb = numb + i;
  }
}
console.log(numb)

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

const arrow = [];
let numb = 100;
for (i = numb; i; i++) {
	if (i === 200) {
  break
  } else {
		if (i % 3 == 0) {
  	arrow.push(i);
  	numb = numb + i;
  	}
  }
}
alert(String(arrow))

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10. Визначити кількість його парних дільників.
// 11. Знайти суму його парних дільників.

const arrow = [];
const arrowpara = [];
let sumpara = 0;
const numb = Number(prompt('Введіть натуральне число', '234'));
let i = 0;
while (i <= numb) {
	let rem = numb % i;
	if (rem === 0) {
		arrow.push(i);
    if (rempara = i % 2 == 0) {
    	arrowpara.push(i);
      sumpara = sumpara + i;
    }
	}
	i++;
}
alert(`Всі дільники: ${arrow}. \nПарні дільники: ${arrowpara.length}.\nСума парних дільників: ${sumpara}`)

// 12. Надрукувати повну таблицю множення від 1 до 10.

const table = [];
for (i = 1; i <= 10; i++) {
	for (j = 1; j <= 10; j++) {
  	result = i*j;
    table.push(String(`\n${i} x ${j} = ${result}`))
  }
  table.push(String(`\n`))
}
alert(`Таблиця множення: \n${table}`)
