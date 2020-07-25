console.log('its working');

let theme = localStorage.getItem('theme');
console.log(theme);
if(theme===null){
    setTheme('light');
} else{
    setTheme(theme);
}
let themeDots=document.getElementsByClassName('theme-dot');

if(themeDots){
for(var i=0; themeDots.length>1;i++){
    themeDots[i].addEventListener('click',function(){
        let mode= this.dataset.mode;
        console.log(mode);
        setTheme(mode);
    });
}
}

function setTheme(mode){
    if(mode=="light"){
        document.getElementById('theme-style').href='default.css';
    }
    if(mode=="solar"){
        document.getElementById('post').style.border='1px solid red';
        // document.getElementById('theme-style').href='{% static "projects/solar.css" %}';
    }
    if(mode=="dark"){
        document.getElementById('theme-style').href='dark.css';
    }

    localStorage.setItem('theme',mode);

}