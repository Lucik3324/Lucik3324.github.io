"use strict"

let choiceType = 0;
let choiceDesign = 0;
let choiceAdaptability = 0;
let cost_website = [0, 2000, 3000, 4000, 10000];
let design_cost = [0, 2000, 5000];
let cost_adaptability = [0, 0, 4000];
let time_website = [0, 2, 3, 4, 30];
let time_design = [0, 2, 5];
let time_adaptability = [0, 0, 2];

let resultTime;
let resultCost;


resultTime = document.querySelector('.number_time');
resultCost = document.querySelector('.number_cost');

document.querySelector('.list_type').addEventListener('change', () => {
    choiceType = document.querySelector('.list_type').selectedIndex;

    resultTime.value = time_website[choiceType] + time_design[choiceDesign] + time_adaptability[choiceAdaptability];

    resultCost.value = cost_website[choiceType] + design_cost[choiceDesign] + cost_adaptability[choiceAdaptability];
});

document.querySelector('.list_design').addEventListener('change', () => {
    choiceDesign = document.querySelector('.list_design').selectedIndex;

    resultTime.value = time_website[choiceType] + time_design[choiceDesign] + time_adaptability[choiceAdaptability];

    resultCost.value = cost_website[choiceType] + design_cost[choiceDesign] + cost_adaptability[choiceAdaptability];
});

document.querySelector('.list_adaptability').addEventListener('change', () => {
    choiceAdaptability = document.querySelector('.list_adaptability').selectedIndex;

    resultTime.value = time_website[choiceType] + time_design[choiceDesign] + time_adaptability[choiceAdaptability];

    resultCost.value = cost_website[choiceType] + design_cost[choiceDesign] + cost_adaptability[choiceAdaptability];
});

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.element-animation');
elements.each((i, el) => {
    observer.observe(el);
});

    const time = 10000;
    const step = 1;
    let logik = false;


function onEntry(entry) {


    entry.forEach(change => {
        if (change.isIntersecting) {
            outNum(120, "#statistic_menu_number_1");
            outNum(4600, "#statistic_menu_number_2");
            outNum(340, "#statistic_menu_number_3");
            outNum(23, "#statistic_menu_number_4");

            change.target.classList.add('show-animation');
            }
 
    });
    
}

function outNum(num, elem) {
    if (!$(".statistics_menu_title").hasClass('show-animation')) {
        let e = document.querySelector(elem);
        let n = 0;
        let t = Math.round(time / (num / step));
        let interval = setInterval(() => {
            n = n + step;
            if (n == num) {
                clearInterval(interval);
            }
            e.innerHTML = n;
        }, t);
    }
}









//function isNumber(num) {
//    return typeof num === 'number' && !isNaN(num);
//}
//
//let calc = {
//    cost_website: [0, 2000, 3000, 3000, 10000],
//    type_website: ["0", "Сайт визитка", "Landing Page", "Сайт услуг", "Интернет магазин"],
//    design_cost: [0, 2000, 5000],
//    type_design: ["0", "Шаблонный", "Уникальный"],
//    cost_adaptability: [0, 0, 4000],
//    type_adaptability: ["0", "Не адаптивный", "Адаптивный"],
//};
//
//let type_website;
//let type_design;
//let type_adaptability;
//
//while (true) {
//
//    type_website = prompt("Выберите тип сайта: \n1. Сайт визитка - 2000р;\n2. Landing Page - 3000р;\n3. Сайт услуг - 3000р;\n4. Интернет магазин - 10000р.");
//
//    if (isNumber(+type_website) && type_website >= 1 && type_website <= 4) break;
//    else if (!isNumber(+type_website)) alert("Введите число!");
//    else if (Number(type_website) < 1 || type_website > 4) alert("Введите число от 1 до 4");
//}
//
//let cost_type_website = calc.cost_website[type_website];
//
//while (true) {
//
//    type_design = prompt("Выберите дизайн: \n1. Шаблонный - 2000р;\n2. Уникальный - 5000р.");
//
//    if (isNumber(+type_design) && type_design >= 1 && type_design <= 2) break;
//    else if (!isNumber(+type_design)) alert("Введите число!");
//    else if (Number(type_design) < 1 || type_design > 2) alert("Введите число от 1 до 2");
//}
//
//let cost_type_design = calc.design_cost[type_design];
//
//while (true) {
//
//    type_adaptability = prompt("Выберите тип адаптивности: \n1. Не адаптивный - 0р;\n2. Адаптивный - 4000р.");
//
//    if (isNumber(+type_adaptability) && type_adaptability >= 1 && type_adaptability <= 2) break;
//    else if (!isNumber(+type_adaptability)) alert("Введите число!");
//    else if (Number(type_adaptability) < 1 || type_adaptability > 2) alert("Введите число от 1 до 2");
//}
//
//let cost_type_adaptability = calc.cost_adaptability[type_adaptability];
//
//let result_type_website = calc.type_website[type_website];
//let result_type_design = calc.type_design[type_design];
//let result_type_adaptability = calc.type_adaptability[type_adaptability];
//
//let result_cost = Number(cost_type_website) + Number(cost_type_design) + Number(cost_type_adaptability);
//
//alert("Ваша заявка: \n1. Тип сайта: " + result_type_adaptability + " - " + cost_type_website + "р" +
//     "\n2. Дизайн: " + result_type_design + " - " + cost_type_design + "р" +
//     "\n3. Адаптивность: " + result_type_adaptability + " - " + cost_type_adaptability + "р" +
//     "\nИтоговая стоимость: " + result_cost + "р" +
//     "\nОжидайте, мы с вами свяжемся!");
//
//
//
//$(document).ready(function(){
////    let options = {threashold: [0.5]};
////    let observer = new IntersectionObserver(onEntry, options);
////    let elements = $('.element-animation');
////    elements.each((i, el) => {
////        observer.observe(el);
////    });
////    
////    function onEntry(entry) {
////        entry.forEach(change => {
////            if (change.isInterseting){
////                change.target.classList.add('show-animation');
////            }
////        });
////    }
//    
//});

$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 50 + "px"
    });
});
