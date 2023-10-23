const ResultFalse = 'Шкода, що ви не вказали свій';

const UserYear = window.prompt("Вкажіть свій рік народження");
let Age;
if (UserYear.trim() == '') {
  alert(`${ResultFalse} рік народження`);
  Age = '';
} else {
	const UserAge = 2023 - UserYear;
  Age = `Мабуть тобі ${UserAge}. `;
}

const UserCity = window.prompt("Вкажіть назву населеного пункту, в якому мешкаєте");
let City;
const CityText = `Ти живеш у `
switch (UserCity) {
    case 'Київ':
        City = CityText + 'столиці України';
        break;
    case 'Вашингтон':
        City = CityText + 'столиці Сполучених Штатах Америки';
        break;
    case 'Лондон':
        City = CityText + 'столиці Великої Британії';
        break;
    case '':
    		alert(`${ResultFalse} населений пункт`);
        City = '';
        break;
    default:
        City = CityText + 'місті ' + UserCity + '. '; 
}

const UserFavoriteSport = window.prompt("Вкажіть свій улюблений вид спорту");
let Sport;
let SportName;
const SportText = 'Круто! Хочеш стати ';
switch (UserFavoriteSport) {
    case 'каное' || 'веслування':
        SportName = 'Юрієм Чебаном';
        Sport = SportText + SportName + '?!';
        break;
    case 'боротьба' || 'греко-римська боротьба':
        SportName = 'Жаном Беленюком';
        Sport = SportText + SportName + '?!';
        break;
    case 'бокс':
        SportName = 'Володимиром Кличко';
        Sport = SportText + SportName + '?!';
        break;
    case '':
    		alert(`${ResultFalse} улюблений вид спорту`);
        Sport = '';
        break;
    default:
        SportName = 'чемпіоном';
        Sport = SportText + SportName + '?!';
    }

const Result = `Вітаю! \n  ${Age} \n  ${City} \n  ${Sport}`;
alert(Result);
