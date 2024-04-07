const message=document.getElementById('input-message');
function textchange(){
    document.getElementById('output-message').innerHTML=message.value;
    message.value='';
}