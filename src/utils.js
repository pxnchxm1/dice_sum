
const col=["orange","pink","green","yellow","red","brown","white"];

function d6(){
    return Math.floor(Math.random()*6)+1;
}
function c6(){
    return col[Math.floor(Math.random()*6)+1];
}

function sum(n){
    return n.reduce((prev,curr)=> prev + curr, 0);
}

function getroll(n){
    return Array.from({length:n},()=>d6());
}

export { c6, d6, getroll, sum };

