"use strict"

function isNumber(num) {
    return typeof num === 'number' && !isNaN(num);
}

let calc = {
    cost_website: [0, 2000, 3000, 3000, 10000],
    type_website: ["0", "Сайт визитка", "Landing Page", "Сайт услуг", "Интернет магазин"],
    design_cost: [0, 2000, 5000],
    type_design: ["0", "Шаблонный", "Уникальный"],
    cost_adaptability: [0, 0, 4000],
    type_adaptability: ["0", "Не адаптивный", "Адаптивный"],

}

let type_website;
let type_design;
let type_adaptability;

while (true) {

    type_website = prompt("Выберите тип сайта: \n1. Сайт визитка;\n2. Landing Page;\n3. Сайт услуг;\n4. Интернет магазин.");

    if (isNumber(+type_website) && type_website >= 1 && type_website <= 4) break;
    else if (!isNumber(+type_website)) alert("Введите число!");
    else if (Number(type_website) < 1 || type_website > 4) alert("Введите число от 1 до 4");
}

let cost_type_website = calc.cost_website[type_website];

while (true) {

    type_design = prompt("Выберите дизайн: \n1. Шаблонный;\n2. Уникальный.");

    if (isNumber(+type_design) && type_design >= 1 && type_design <= 2) break;
    else if (!isNumber(+type_design)) alert("Введите число!");
    else if (Number(type_design) < 1 || type_design > 2) alert("Введите число от 1 до 2");
}

let cost_type_design = calc.design_cost[type_design];

while (true) {

    type_adaptability = prompt("Выберите тип адаптивности: \n1. Не адаптивный;\n2. Адаптивный.");

    if (isNumber(+type_adaptability) && type_adaptability >= 1 && type_adaptability <= 2) break;
    else if (!isNumber(+type_adaptability)) alert("Введите число!");
    else if (Number(type_adaptability) < 1 || type_adaptability > 2) alert("Введите число от 1 до 2");
}

let cost_type_adaptability = calc.cost_adaptability[type_adaptability];

let result_type_website = calc.type_website[type_website];
let result_type_design = calc.type_design[type_design];
let result_type_adaptability = calc.type_adaptability[type_adaptability];

let result_cost = Number(cost_type_website) + Number(cost_type_design) + Number(cost_type_adaptability);

alert("Ваша заявка: \n1. Тип сайта: " + result_type_adaptability + " - " + cost_type_website + "р" +
     "\n2. Дизайн: " + result_type_design + " - " + cost_type_design + "р" +
     "\n3. Адаптивность: " + result_type_adaptability + " - " + cost_type_adaptability + "р" +
     "\nИтоговая стоимость: " + result_cost + "р" +
     "\nОжидайте, мы с вами свяжемся!");



