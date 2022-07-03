const body=document.body;

//DarkMode=====================================================

let imgToggleDarkMode=document.querySelector('.buttonToggleDarkMode'); 

function darkMode(){
       
    

    body.classList.toggle('darkMode');

    let isDarkMode=body.classList.contains('darkMode')
    if(isDarkMode){
        imgToggleDarkMode.src='light_mode.svg';
    }else{
       
        imgToggleDarkMode.src='dark_mode.svg';
    }

    
    /*
    let dark = false;
    if (dark === true) {
        imgToggleDarkMode.src = 'dark_mode.svg';
    } else if(dark===false){
        imgToggleDarkMode.src = 'light_mode.svg';
      
    }
    console.log(imgToggleDarkMode)
    dark = !dark; 
   */
}
imgToggleDarkMode.addEventListener('click', darkMode);





//============================================================


const projects=document.querySelector('#projects');
const skills=document.querySelector('#skills');
const projetos=document.querySelector('#projetos');
const divskills=document.querySelector('#showskills');

function exibir(id){
    if(id==skills){
        projetos.style.display='none';
        divskills.style.display='grid';
        id.style.backgroundColor='white';
        projects.style.backgroundColor='var(--cor2)';

    }else{
        divskills.style.display='none';
        projetos.style.display='grid';
        id.style.backgroundColor='white';
        skills.style.backgroundColor='var(--cor2)';

    }

}


