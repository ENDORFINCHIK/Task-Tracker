const ThemeBtn = document.getElementById('btn-theme-color')
const body = document.getElementById('body')
const logo = document.getElementById('logo')
const themeImg = document.getElementById('theme-img')

let darkTheme = false;
function colorTheme(){
    if(darkTheme === true){
        body.classList.add('theme-light')
        body.classList.remove('theme-dark')
        logo.src ='Images/light-theme-logo.png'
        themeImg.src = 'Images/Theme.png'
        darkTheme = false;
    }
    else{
        body.classList.add('theme-dark')
        body.classList.remove('theme-light')
        logo.src ='Images/dark-theme-logo.png'
        themeImg.src = 'Images/dark-theme.png'
        darkTheme = true
    }
    
}
ThemeBtn.onclick = function(){
        colorTheme()
    }