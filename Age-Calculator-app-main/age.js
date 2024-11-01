const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

const entryDayElement = document.getElementById('days-2');
const entryMonthElement = document.getElementById('months-2');
const entryYearElement = document.getElementById('years-2');


dayElement.addEventListener('change', ageCalculater);
monthElement.addEventListener('change', ageCalculater);
yearElement.addEventListener('change', ageCalculater);

const resetElement = document.getElementById('reset');
resetElement.addEventListener("click", enterNewData)


function ageCalculater(){
    const dayInput = dayElement.value;
    const monthInput = monthElement.value;
    const yearInput = yearElement.value;
    let dayNow =  16;
    let monthNow = 08;
    let yearNow = 2024;
    let calculationDay = dayNow - dayInput;
    let calculationMonth =  monthNow - monthInput;
    let calculationYear = yearNow - yearInput;

    if (calculationMonth < 0){
        calculationYear--
        calculationMonth += 12;
    }
    if (calculationDay < 0){
        calculationMonth--
        calculationDay += 30;
    }

    entryDayElement.textContent= calculationDay;
    entryMonthElement.textContent = calculationMonth;
    entryYearElement.textContent = calculationYear;

}



function enterNewData(){

    entryDayElement.textContent= "--";
    entryMonthElement.textContent = "--";
    entryYearElement.textContent = "--";
    // clearInputElement.textContent = '';
    dayElement.value = "";
    monthElement.value = "";
    yearElement.value = "";
}

