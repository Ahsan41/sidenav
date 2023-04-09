var sidebar = document.querySelector(`.sidenavbar`)
var toggle = document.querySelector(`.toggle`)

toggle.addEventListener(`click`, function(){
    sidebar.classList.toggle(`active`);
    
})