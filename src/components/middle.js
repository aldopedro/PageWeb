let count = 1;
document.getElementById('middle-radio1').checked = true;

setInterval (function () {
    switchBanner();
}, 4500);

function switchBanner () {
    count++
    if(count > 3){
        count = 1;
    }
    document.getElementById("middle-radio"+count).checked = true;
}
