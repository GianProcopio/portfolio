const hamburgerIcon = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuItem = document.querySelectorAll('.item-menu');

menuItem.forEach(item=>{
    item.addEventListener('click', ()=>{
        mobileMenu.classList.toggle('show-menu');
    hamburgerIcon.classList.toggle('open');
    })
})


hamburgerIcon.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('show-menu');
    hamburgerIcon.classList.toggle('open');
})