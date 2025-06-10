document.addEventListener("DOMContentLoaded" , () => {

    const navLinks =  document.querySelectorAll('#navbarNav .nav-link')
    const sections = document.querySelectorAll('section')

navLinks.forEach( navLink => {
  navLink.addEventListener('click', function(){
     navLinks.forEach(link => link.parentElement.classList.remove('active'));

     this.parentElement.classList.add('active')
     navLink.classList.remove('active')
})
})

let currentSection = '';
sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if( pageYOffset >= sectionTop - 60 ){
        currentSection = section.getAttribute('id')
    }
})

navLinks.forEach( navLink => {
    navLink.classList.remove('active')
    const hrefAttr = navLink.getAttribute('href')
    if(hrefAttr.substring(1) === currentSection){
        navLink.classList.add('active')
    }
})

const curr_year = document.getElementById('current-year').textContent = new Date().getFullYear();
})