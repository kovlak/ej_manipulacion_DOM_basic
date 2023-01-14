

const h1 = document.querySelector('#h1');
const input = document.querySelector('#calculo');
const input2 = document.querySelector('#calculo2');
let btn= document.getElementById('btnCalcular');
let muestra_calcular = document.getElementById('muestra');
btn.addEventListener('mouseover',calcular);
function calcular(){
    let valor = parseInt(document.getElementById("calculo").value);
    let valor2 = parseInt(document.getElementById("calculo2").value);
    document.getElementById("muestra_calculo").innerHTML="sumatoria: "+(valor+valor2);
} 