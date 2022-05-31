const columnOne = document.getElementById("institutional-button-one");
const columnTwo = document.getElementById("institutional-button-two");
const columnThree = document.getElementById("institutional-button-three");
const columnFour = document.getElementById("institutional-button-four");
const columnFive = document.getElementById("institutional-button-five");


    function openColumnOne () {
        const aux = document.getElementById("institutional-column-one");
        aux.classList.toggle("active-one");
        const button = document.getElementById('institutional-button-mobile2');
        button.classList.toggle("menu-desactive");
    };

columnOne.addEventListener('click', openColumnOne);


    function openColumnTwo () {
        const aux = document.getElementById("institutional-column-two");
        aux.classList.toggle("active-two");
        const button = document.getElementById('institutional-button-mobile4');
        button.classList.toggle("menu-desactive-two");
    };

columnTwo.addEventListener('click', openColumnTwo);

    function openColumnThree () {
        const aux = document.getElementById("institutional-payment-icon");
        aux.classList.toggle("active-three");
        const button = document.getElementById('institutional-button-mobile6');
        button.classList.toggle("menu-desactive-three");
    };

columnThree.addEventListener('click', openColumnThree);

    function openColumnFour () {
        const aux = document.getElementById("institutional-correio-icon");
        aux.classList.toggle("active-four");
        const button = document.getElementById('institutional-button-mobile8');
        button.classList.toggle("menu-desactive-four");
    };

columnFour.addEventListener('click', openColumnFour);

    function openColumnFive () {
        const aux = document.getElementById("institutional-column-five");
        aux.classList.toggle("active-five");
        const button = document.getElementById('institutional-button-mobile10');
        button.classList.toggle("menu-desactive-five");
    };

columnFive.addEventListener('click', openColumnFive);
