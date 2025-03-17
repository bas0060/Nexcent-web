const backToTopButton = document.getElementById("backToTop");

        window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
        } else {
        backToTopButton.style.display = "none";
        }
        };

        backToTopButton.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
        };


        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('-translate-x-full');
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
        });