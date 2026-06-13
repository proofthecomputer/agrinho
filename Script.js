function calcularAgua(){

let area =
Number(document.getElementById("area").value);

if(area <= 0){

document.getElementById("resultado")
.innerHTML =
"Digite uma área válida.";

return;
}

let litros = area * 5;

document.getElementById("resultado")
.innerHTML =
"💧 Necessário aproximadamente "
+ litros +
" litros de água por dia.";
}

const ctx =
document.getElementById("meuGrafico");

new Chart(ctx,{
type:'line',

data:{
labels:[
'Jan',
'Fev',
'Mar',
'Abr',
'Mai',
'Jun'
],

datasets:[{

label:'Produção (ton)',

data:[
12,
19,
15,
22,
28,
35
],

borderWidth:3,
tension:.4

}]
},

options:{
responsive:true
}
});

function responder(){

let pergunta =
document.getElementById("pergunta")
.value.toLowerCase();

let resposta =
"Não encontrei uma resposta.";

if(pergunta.includes("milho")){
resposta =
"🌽 O milho precisa de solo fértil e boa irrigação.";
}

else if(pergunta.includes("soja")){
resposta =
"🌱 A soja se adapta melhor a climas quentes.";
}

else if(pergunta.includes("agua")){
resposta =
"💧 Utilize irrigação controlada para evitar desperdícios.";
}

else if(pergunta.includes("plantio")){
resposta =
"🚜 O calendário agrícola ajuda a escolher a melhor época.";
}

const chat =
document.getElementById("chat");

chat.innerHTML +=
"<p><b>Você:</b> "
+ pergunta +
"</p>";

chat.innerHTML +=
"<p><b>AgroBot:</b> "
+ resposta +
"</p><br>";

chat.scrollTop =
chat.scrollHeight;

document.getElementById("pergunta")
.value="";
}
