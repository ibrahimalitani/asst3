function $(id){return document.getElementById(id)};
function tokenize(seed){
    let pattern = /[a-zA-Z]/g;
    let letters = seed.match(pattern);
    let total = '';
    for (let letter of letters){
        let asciiv = letter.charCodeAt(0);
        total+= asciiv;
    }
    let patternd = /\d/g;
    let digits = seed.match(patternd);
    let hexa = '';
    for (d of digits){
        hexa+=d;
    }
    let hex = '0x'+parseInt(hexa).toString(16);
    total+= hex;
    total = total.toUpperCase();
    return total;


}
async function getFile(){
    try {
       let response = await fetch('tokens.txt');  
       if (!response.ok){
        throw new Error('not ok');
       }
       let text = await response.text();
       let patternt = /\d{6,9}[X]\d{1,2}/g;
       let token = text.match(patternt);
       $('tokens').value = token;

       return(token);

        
}
catch(error){
    console.error("Error",error);
}
}
document.addEventListener('DOMContentLoaded', async function() {
$('netaccount').addEventListener('blur',async function(){
    let x = tokenize($('netaccount').value);
    let y =getFile();
    for(let z of y){
        if(x===z){
            $('tokens').value = 'omak';
        }
    }


})})

