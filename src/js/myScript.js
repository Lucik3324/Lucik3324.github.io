"use strict"
$(document).ready(function () {

    $(".logo").find('a').addClass("active");

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        $(".section").each((i, el) => {
            if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {

                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    }
                });
                $('nav .menu li:eq(' + i + ')').find('a').addClass('active');
            }


        });

        $(".main").each((i, el) => {



            if ($(el).offset().top == $(".main").outerHeight() - $("nav").outerHeight() <= scrollDistance) {
                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    }
                });

                $(".logo").find('a').addClass("active");

                $("nav li a").each((i, el) => {
                    if ($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    }
                });
            }
        });
    });

    new WOW().init();

    $("#phone_2").mask("+375(99) 999-99-99");

    $('.form_1').submit(function (event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/mail_1.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! \n" + "Мы с вами свяжемся!");
            $('.form_1').trigger("reset");
        });
        return false;
    });

    $('.form_2').submit(function (event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! \n" + "Мы с вами свяжемся!");
            $('.form_2').trigger("reset");
        });
        return false;
    });


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

    function onEntry(entry) {


        entry.forEach(change => {
            if (change.isIntersecting) {

                outNum();

                change.target.classList.add('show-animation');
            }

        });

    }

    function outNum() {
        if (!$(".statistics_menu_title").hasClass('show-animation')) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
            $(".statistics_menu_title").each(function () {
                var tcount = $(this).data("count");
                $(this).animateNumber({
                        number: tcount,
                        easing: 'easeInQuad',
                        "font-size": "40px",
                        numberStep: comma_separator_number_step
                    },
                    2000);
            });

        }
    }

    let newObserver = new IntersectionObserver(newOnEntry, options);
    let newElements = $('.element_animation');

    newElements.each((i, el) => {
        newObserver.observe(el);
    });

    function newOnEntry(entry) {


        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('not_element_animation');
            }

        });

    }

    $('.rev_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false
    });


    $('.image-link').magnificPopup({
        type: 'image'
    });

    setTimeout(function () {
        $('#mod').trigger('click');
    }, 10000);



});

$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 50 + "px"
    });
});
