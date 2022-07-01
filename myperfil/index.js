const body=document.body;
const projects=document.querySelector('#projects');
const skills=document.querySelector('#skills');
const projetos=document.querySelector('#projetos');
const divskills=document.querySelector('#showskills');

//DarkMode=====================================================


imgToggleDarkMode.addEventListener('click', darkMode)

function darkMode(){
    const imgToggleDarkMode=document.querySelector('#imgToggleDarkMode');    
    let dark = false;

    body.classList.toggle('darkMode');
    if (dark === true) {
        imgToggleDarkMode.src  = 'dark_mode_black_24dp.svg';
    } else {
        imgToggleDarkMode.src = 'light_mode_white_24dp.svg';
      
    }
    dark = !dark; 
   
}

//============================================================

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


