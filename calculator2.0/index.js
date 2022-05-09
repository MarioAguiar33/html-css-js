let visor=document.querySelector('#visor');
var imgdarkmode=document.querySelector('#darkmode');
const body=document.body;
let calculadora=document.querySelector('#calculadora');
let teclas=document.querySelectorAll('button');
let imgbackspaece=document.querySelector('#imgbackspaece');


var  isDark = true;


function darkMode(){
   // body.classList.toggle('darkmode');
    calculadora.classList.toggle('darkmode');
    visor.classList.toggle('darkmode');    

    teclas.forEach((botao)=>{
        botao.classList.toggle('changebordercolor');
    })
     
    
    
    
    if (isDark === true) {
       
        imgdarkmode.src = 'dark_mode_black_24dp.svg';        
        imgbackspaece.src='backspace-black.svg';
    } else {
      
        imgdarkmode.src  = 'light_mode_white_24dp.svg';
        imgbackspaece.src='backspace_FILL0_wght400_GRAD0_opsz24.svg';
        
    }
    isDark = !isDark; 
   
}






function resetar(){
    visor.innerHTML=""
}

function apagar(){
    var resultado =visor.innerHTML;
    visor.innerHTML=resultado.substring(0,resultado.length -1);

}
function inserir(num){
   let numero= visor.innerHTML;
   visor.innerHTML=numero+num;
}

function calcular(){
    var numero= document.querySelector("#visor").innerHTML;
    if(numero){
        document.querySelector("#visor").innerHTML = eval(numero);
    }
    else{
        alert("Nada para calcular");
    }
    
    
}