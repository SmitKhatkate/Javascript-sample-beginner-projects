const userinpt=document.getElementById('userInput');
var expression='';

function press(num){
    expression+=num;
    userinpt.value=expression;
}

function equel(){
    userinpt.value=eval(expression);
    expression='';
}
function erase(){
    expression='';
    userinpt.value=expression;
}