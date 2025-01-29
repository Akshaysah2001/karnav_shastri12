// Nav links ko select karein
const navLinks = document.querySelectorAll('.nav a');

// Event listener ko har link ke liye add karein
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Pehle sabhi links se 'active' class ko remove karein
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Click ki gayi link par 'active' class add karein
        this.classList.add('active');
    });
});

let lastScrollY = window.scrollY; // Track last scroll position
let isScrolling; // Timer for detecting scroll stop
const header = document.querySelector('header'); // Select the nav bar

// Scroll event listener
window.addEventListener('scroll', () => {
    clearTimeout(isScrolling); // Clear the previous timer

    // Check if user is scrolling up or down
    if (window.scrollY > lastScrollY) {
        header.classList.add('hide'); // Scroll down -> hide nav bar
    } else {
        header.classList.remove('hide'); // Scroll up -> show nav bar
    }

    lastScrollY = window.scrollY; // Update last scroll position

    // Timer to detect when scrolling stops
    isScrolling = setTimeout(() => {
        header.classList.add('show'); // Add the show class on scroll stop
        header.classList.remove('hide'); // Remove hide class
    }, 150); // Delay before showing nav bar (in milliseconds)
});

document.addEventListener("DOMContentLoaded", () => {
    const filterItems = document.querySelectorAll(".prayers-filter li");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterItems.forEach((filter) => {
        filter.addEventListener("click", () => {
            // Remove active class from all filters
            filterItems.forEach((item) => item.classList.remove("active"));

            // Add active class to the clicked filter
            filter.classList.add("active");

            // Get filter category
            const filterCategory = filter.getAttribute("data-filter");

            // Show/hide gallery items with animation
            galleryItems.forEach((item) => {
                const itemCategory = item.getAttribute("data-category");

                if (filterCategory === "all" || itemCategory === filterCategory) {
                    item.classList.add("visible");
                } else {
                    item.classList.remove("visible");
                }
            });
        });
    });

    // Show all items by default
    document.querySelector("[data-filter='all']").click();
});

function showGroup(index) {
    const groups = document.querySelectorAll(".donate-cards");
    const dots = document.querySelectorAll(".dot");

    groups.forEach((group, i) => {
        if (i === index) {
            group.classList.remove("hidden");
        } else {
            group.classList.add("hidden");
        }
    });

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

let currentGroup = 0;

function showGroup(index) {
    const groups = document.querySelectorAll(".donate-cards");
    groups.forEach((group, i) => {
        group.classList.toggle("hidden", i !== index);
    });

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });

    currentGroup = index;
}

function nextGroup() {
    const groups = document.querySelectorAll(".donate-cards");
    if (currentGroup < groups.length - 1) {
        showGroup(currentGroup + 1);
    }
}

function prevGroup() {
    if (currentGroup > 0) {
        showGroup(currentGroup - 1);
    }
}

function showArrows() {
    document.querySelector(".left-arrow").style.opacity = "1";
    document.querySelector(".right-arrow").style.opacity = "1";
}

function hideArrows() {
    document.querySelector(".left-arrow").style.opacity = "0";
    document.querySelector(".right-arrow").style.opacity = "0";
}
