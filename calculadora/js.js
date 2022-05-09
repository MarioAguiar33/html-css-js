function resetar(){
    document.getElementById("visor").innerHTML=""
}

function apagar(){
    var resultado =document.getElementById("visor").innerHTML;
    document.getElementById("visor").innerHTML=resultado.substring(0,resultado.length -1);

}
function inserir(num){
   var numero= document.getElementById("visor").innerHTML;
   document.getElementById("visor").innerHTML=numero+num;
}
function calcular(){
    var numero= document.getElementById("visor").innerHTML;
    if(numero){
        document.getElementById("visor").innerHTML= eval(numero);
    }
    else{
        alert("Nada para calcular");
    }
    console.log(eval(numero))

}