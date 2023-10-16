let NumberA = window.prompt("Введіть перше число", "2");
let NumberB = window.prompt("Введіть друге число", "2");
const a = Number(NumberA);
const b = Number(NumberB);
const add = a+b;
const sub = a-b;
const multipl = a*b;
const divi = a/b;

alert ('Користувач ввів ' + a + " і " + b + ": " 
+ a + "+" + b + "=" + add + "; "
+ a + "-" + b + "=" + sub + "; "
+ a + "*" + b + "=" + multipl + "; "
+ a + "/" + b + "=" + divi + "."
)
