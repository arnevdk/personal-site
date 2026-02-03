document.getElementById ("toggleDark").addEventListener("click", toggleDark, false);


function toggleDark() {
    const body = document.getElementsByTagName('body')[0];
    const currentMode = body.className;
    if(currentMode === 'dark'){
        body.className = 'light';
        window.location.hash = 'light';
    }else{
        body.className = 'dark';
        window.location.hash = 'dark';
    }
    return false;
}


const currentMode = window.location.hash.substr(1);
if(currentMode==='dark' || currentMode==='light'){
    const body = document.getElementsByTagName('body')[0];
    body.className = currentMode;
}
