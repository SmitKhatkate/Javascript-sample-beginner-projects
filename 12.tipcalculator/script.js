const amount=document.getElementById("amount");
const guests=document.getElementById("guests");
const quality=document.getElementById("quality");
const tipamount=document.getElementById("tipamount");

calculate=()=>{
    const tip=((amount.value * quality.value) / (guests.value)).toFixed(2);
    amount.value="";
    guests.value="";
    quality.value="";
    if(tip=='NaN'){
        tipamount.innerHTML='tip $0 each';
    }
    else{
        tipamount.innerHTML="tip $" + tip + "each";
    }
}