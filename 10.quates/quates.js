function generate(){
    let quates={
        "Niraj_P":'"The only way to do a great job is to love what you are doing."',
        "Smit_K":'"If at first you don’t succeed, destroy all evidence that you tried"'
    }
    let authors=Object.keys(quates);
    let randomAuthor =authors[Math.floor(Math.random() * authors.length)];
    let quate=quates[randomAuthor];
    
    document.getElementById('quate').innerHTML=quate;
    document.getElementById('author').innerHTML=randomAuthor;
}
    