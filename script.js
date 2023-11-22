function Go(){
    let q=document.getElementById('q').value;
    let price=1300;
    let item='Piroshkii';
    let msg=`Ta ${item}-aas ${q} shirheg avbal, une ${q*price} bolj bana.`;
    document.getElementById('response').innerHTML=msg;
}