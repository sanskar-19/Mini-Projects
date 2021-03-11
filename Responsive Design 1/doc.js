burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnavbar')
navlist = document.querySelector('.navlist')

burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class')
    rightnav.classList.toggle('v-class')
    navbar.classList.toggle('h-class')

})


