addEventListener('DOMContentLoaded', () => {
    const barra_btn = document.querySelector('.barra_btn')
    if (barra_btn) {
        barra_btn.addEventListener('click',() => {
            const nav_menu = document.querySelector('.nav_menu')
            nav_menu.classList.toggle('show')
        })
    }
})