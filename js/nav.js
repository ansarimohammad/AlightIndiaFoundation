//// NAV START 

// NAV 

let hamburger = document.querySelector('.hamb-main');
let navbar = document.querySelector('.nav');
let nav_ul = document.querySelector('.ul-nav');
let hamb1 = document.querySelector('.h-resp1');
let hamb2 = document.querySelector('.h-resp2');
let header = document.querySelector('.header');


hamburger.addEventListener("click", ()=>{
    navbar.classList.toggle('nav-resp');
    nav_ul.classList.toggle('ul-resp');
    
    if (header.classList.contains("head-resp")){

        header.classList.remove("head-resp");
    } else {
        header.classList.add("head-resp");
    }

});

// nav end 



// hamburger delay 

document.addEventListener('DOMContentLoaded', () => {
  const hambMain = document.querySelector('.hamb-main');
  const header = document.querySelector('.header');
   
  hambMain.addEventListener('click', () => {
      const dropmenu = document.querySelectorAll('.ul-delay');
      // header.style.backgroundColor = '#FF7F02'; 
  
      dropmenu.forEach(dropElement => {
    
          setTimeout(() => {
              if (dropElement.classList.contains('visible')) {
                  dropElement.classList.remove('visible');
                  // header.style.backgroundColor = 'transparent';
              } else {
                  dropElement.classList.add('visible');
              }
          }, 300);
      });
  });
});


// hamburger delay end



document.addEventListener('DOMContentLoaded', () => {

  const nav_height = document.querySelector('.logo-main').firstElementChild.firstElementChild;
  const nav = document.querySelector('.header');
  nav.classList.add("width-height2");

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      // nav_height.style.width = '155px';
      // nav.style.height = 'auto';
      nav.classList.add("width-height");
      nav.classList.remove("width-height2");
      
    } else {
      // nav_height.style.width = '250px';
      // nav.style.height = '100px';
      nav.classList.remove("width-height");
      nav.classList.add("width-height2");
      
    }
  });

});

//// NAV END 