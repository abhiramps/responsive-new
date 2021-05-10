const toggler=document.querySelector('.navbar-toggler');
const navbar_nav=document.querySelector('.navbar-nav');

toggler.addEventListener("click",()=>{
    navbar_nav.classList.toggle('navbar-collapse');
});