let result,
num1 = "",
num2 = "",
number_1 = "",
number_2 = "",
buffer = "",
act = "",
dial = document.querySelector('.dial');

document.querySelector('#clear').addEventListener("click", () => document.location.reload());

let clear = () => number_1 = number_2 = num1 = num2 = buffer = "";
let clearAct = () => act = result = "";

document.querySelector('.digits').addEventListener("click", function(event){
    // console.log(event.target.textContent);
    if (dial.value == "" || act == "" || act == "equal" || act == "sqrt"){
        num1 += event.target.textContent
        dial.value = num1;
        number_1 = parseInt(dial.value);
        // console.log(number_1);
    } else if (dial.value != "" && act != "" && act != "equal") {
        buffer += event.target.textContent;
        num2 = buffer;
        // console.log(buffer);
        dial.value = num2;
        // console.log(dial.value);
        number_2 = parseInt(buffer);
        // console.log(number_2);
    }
})

document.querySelector('.actions').addEventListener("click", function(event){
    act = event.target.attributes[0].value;
    // console.log(act);
});

document.querySelector('.sqrt').addEventListener("click", function(){
    result = Math.sqrt(number_1);
    dial.value = result;
    clearAct();
    clear();
})

document.querySelector('.equal').addEventListener("click", function(){
    if (act == "plus") {
        result = number_1 + number_2;
        dial.value = result;
        clear();
    } else if (act == "minus"){
        result = number_1 - number_2;
        dial.value = result;
        clear();
    } else if (act == "mult"){
        result = number_1 * number_2;
        dial.value = result;
        clear();
    } else if (act == "div"){
        if (number_2 == 0){
            dial.value = 'Error';
        } else {
            result = number_1 / number_2;
            dial.value = result;
        }
        clear();
    } else if (act == "pow"){
        result = Math.pow(number_1, number_2);
        dial.value = result;
        clear();
    } else if (act == "percent"){
        result = (number_1 / 100) * number_2;
        dial.value = result;
        clear();
    } 
})
