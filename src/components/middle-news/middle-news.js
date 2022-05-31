document.addEventListener("DOMContentLoaded", function () {
const buttonBack = document.getElementById('middle-news-button-back');
const buttonNext = document.getElementById('middle-news-button-next');
var count = 1;
function next () {
    count ++;
    if (count > 3)
        count = 1;
    document.getElementById('middle-news-product'+count).checked = true;

}
buttonNext.addEventListener('click', next)
function back() {
    count --;
    if (count < 1)
    count = 3;
    document.getElementById('middle-news-product'+count).checked = true;
}
buttonNext.addEventListener('click', next)
buttonBack.addEventListener('click', back)
})