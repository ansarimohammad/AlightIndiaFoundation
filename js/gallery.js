import { Gallerypages } from './pages.js';

document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const totalPages = 2; // Change it if more pages added
    const content = document.getElementById('container2');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pageButtons = document.querySelectorAll('.page');
    const currentPageDisplay = document.getElementById('current-page');

    const { galleryp1, galleryp2 } = Gallerypages();

    function loadPage(page) {
        
        if (page === 1) {
            content.innerHTML = galleryp1;
            
        } else if (page === 2) {
            content.innerHTML = galleryp2;
        } else {

        }


        currentPageDisplay.textContent = `Page ${page}`;
        pageButtons.forEach(button => {
            if (parseInt(button.dataset.page) === page) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        prevButton.disabled = (page === 1);
        nextButton.disabled = (page === totalPages);
    }
    

    // PREV AND NEXT WORKING 

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadPage(currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            loadPage(currentPage);
        }
    });

    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentPage = parseInt(button.dataset.page);
            loadPage(currentPage);
        });
    });

    // Load the initial page
    loadPage(currentPage);
});





// CONTAINER2 

var swiper = new Swiper(".slide-content", {
    slidesPerView: 5,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
        1500: {
          slidesPerView: 5,
        },
    },
});