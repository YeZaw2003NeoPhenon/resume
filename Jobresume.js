document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("#navbarNav .nav-link");
    const sections = document.querySelectorAll("section[id], footer[id]");
    const navbar = document.getElementById("mainNav");

    const updateActiveNav = () => {
        let currentSection = "hero";
        const scrollPos = window.pageYOffset + 80;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        if (currentSection === "hero") {
            currentSection = "about";
        }

        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
            navLink.removeAttribute("aria-current");
            const href = navLink.getAttribute("href");
            if (href && href.startsWith("#") && href.substring(1) === currentSection) {
                navLink.classList.add("active");
                navLink.setAttribute("aria-current", "page");
            }
        });
    };

    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", function () {
            if (!this.getAttribute("href")?.startsWith("#")) return;

            navLinks.forEach((link) => {
                link.classList.remove("active");
                link.removeAttribute("aria-current");
            });
            this.classList.add("active");
            this.setAttribute("aria-current", "page");
        });
    });

    let scrollTimeout;
    window.addEventListener("scroll", () => {
        if (scrollTimeout) return;
        scrollTimeout = setTimeout(() => {
            updateActiveNav();
            scrollTimeout = null;
        }, 50);
    });

    window.addEventListener("scroll", () => {
        if (navbar) {
            navbar.classList.toggle("navbar-scrolled", window.pageYOffset > 50);
        }
    });

    updateActiveNav();

    const yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach((el) => new bootstrap.Tooltip(el));
});
