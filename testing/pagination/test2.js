document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const totalPages = 10;
    const content = document.getElementById('container2');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pageButtons = document.querySelectorAll('.page');
    const currentPageDisplay = document.getElementById('current-page');

    function loadPage(page) {
        content.innerHTML = `
<div class="container2">
    <div class="mem-text">Every picture tells a story of hope, resilience, and transformation. Witness the journey and impact of our community through these powerful images. Together, we are making a difference, one smile at a time</div>
    <div class="img-team-mem">
        <div class="img img1">
        <img src="../assets/GalleryImage/distribution.jpg" />
        <div class="content">
            <div>Developer Mohammad</div>
            <div>Founder & Owner</div>
        </div>
        </div>
        <div class="img img2">
        <img src="../assets/GalleryImage/education.jpg" />
        <div class="content">
            <div>Developer Mohammad</div>
            <div>UI & Web Developer</div>
        </div>
        </div>
        <div class="img img3">
        <img src="../assets/GalleryImage/environment.jpg" />
        <div class="content">
            <div>Developer Mohammad</div>
            <div>UI & Web Developer</div>
        </div>
        </div>
        <div class="img img4">
        <img src="../assets/GalleryImage/clothsdistrubute.jpg" />
        <div class="content">
            <div>Developer Mohammad</div>
            <div>UI & Web Developer</div>
        </div>
        </div>
        <div class="img img5">
        <img src="../assets/GalleryImage/healthman.jpg" />
        <div class="content">
            <div>Developer Mohammad</div>
            <div>UI & Web Developer</div>
        </div>
        </div>
        <div class="img img6">
        <img src="../assets/GalleryImage/pf2.png" />
        <div class="content">
            <div>Developer Mohammad</div>
            <div>UI & Web Developer</div>
        </div>
        </div>
        <div class="img img7">
        <img src="../assets/GalleryImage/msw.jpg" />
        <div class="content">
            <div>Developer Mohammad</div>
            <div>UI & Web Developer</div>
        </div>
        </div>
        <div class="img img8">
        <img src="../assets/GalleryImage/poorkid.jpg" />
        <div class="content">
            <div>Developer Mohammad</div>
            <div>UI & Web Developer</div>
        </div>
        </div>
    </div>
</div>`;
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
