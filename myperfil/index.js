const body=document.body;
var imgdarkmode=document.querySelector('#darkmode');
var dark = false;


function darkMode(){
    body.classList.toggle('darkMode');
    if (dark === true) {
        imgdarkmode.src  = 'dark_mode_black_24dp.svg';
    } else {
       imgdarkmode.src = 'light_mode_white_24dp.svg';
      
    }
    dark = !dark; 
   
}


