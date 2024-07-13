import { Completedpages } from './pages.js';

document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const totalPages = 2; // Change it if more pages added
    const content = document.getElementById('container2');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pageButtons = document.querySelectorAll('.page');
    const currentPageDisplay = document.getElementById('current-page');

    const { completedp1, completedp2 } = Completedpages();

    function loadPage(page) {
        
        if (page === 1) {
            content.innerHTML = completedp1;
        } else if (page === 2) {
            content.innerHTML = completedp2;
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



