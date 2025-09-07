let container = document.getElementById("colorPickerContainer");
let hexCode = document.getElementById("selectedColorCode");

function changeColorByGray(){
    container.style.background = "#e0e0e0";
    hexCode.textContent = "#e0e0e0";
}
function changeColorByGreen(){
    container.style.background = "#6fcf97";
    hexCode.textContent = "#6fcf97";
}
function changeColorByBlue(){
    container.style.background = "#56ccf2";
    hexCode.textContent = "#56ccf2";
}
function changeColorByPurple(){
    container.style.background = "#bb6bd9";
    hexCode.textContent = "#bb6bd9";
}