const YourName = window.prompt("Вкажіть своє імʼя", "Іванка");
const YourMidname = window.prompt("Вкажіть своє по-батькові", "Іванівна");
const YourLastname = window.prompt("Вкажіть своє прізвище", "Іванченко")

alert ('Вітаю тебе, ' + YourLastname + " " + YourName + " " + YourMidname + "!")

let YourNumber = window.prompt("Вкажи пʼятизначне число", "12345");
StringYourNumber = String(YourNumber);

alert(StringYourNumber.split("")[0] + " " + StringYourNumber.split("")[1]  + " "  + StringYourNumber.split("")[2] + " "  + StringYourNumber.split("")[3] + " " + StringYourNumber.split("")[4])
