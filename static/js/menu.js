const menu_btn = document.getElementById('mini-menu-btn')
const menu = document.getElementById('mini-menu')
let state = false
menu.style.display = 'none'
menu_btn.addEventListener('click',()=>{
    if(!state){
        menu.style.display = 'none'
        state = true
    }
    else{
        menu.style.display = 'flex'
        state = false
    }
})