const pencil=document.getElementById("pen");
const inputtext=document.getElementById("inputtext");
const grocerry=document.getElementsByClassName("grocerry")[0];
const allitems=document.getElementById("allitems");

pencil.addEventListener('click',function(){
    allitems.innerHTML="";
})

inputtext.addEventListener("keydown",function(event){
    if (event.key=="Enter")
    additems();
})
function additems(){
    let h2=document.createElement("h2");
    h2.innerHTML="-" + inputtext.value;

    h2.addEventListener("click",function(){
        h2.style.textDecoration="line-through";
    })
    allitems.insertAdjacentElement("beforeend",h2);
    inputtext.value="";

}