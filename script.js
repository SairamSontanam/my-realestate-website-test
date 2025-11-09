// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && !event.target.closest('.menu-toggle')) {
            if (nav) nav.classList.remove('show');
        }
    });
});

// FIXED Smooth scrolling - ONLY for same-page links (#)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for same-page anchor links (that start with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            // For external links (like projects.html), let them work normally
        });
    });
});

// test code 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Additional fix: Ensure navigation links work properly
document.addEventListener('DOMContentLoaded', function() {``
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If it's a page link (not #), make sure it works
            if (!href.startsWith('#')) {
                // Remove any event listeners that might be blocking
                return true;
            }
        });
    });
});


const images = [

  "images/indepdent-house-medchal.png",
  "images/open-plots-jadcherla.png",
  "images/Lemon-Tree-Elite-tejo-vanam.png"
];

let currentIndex = 0;
const hero = document.querySelector(".hero-carousel");

// Initial image
hero.style.backgroundImage = `url(${images[currentIndex]})`;

// Change image every 2.5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  hero.style.backgroundImage = `url(${images[currentIndex]})`;
}, 2000);


document.addEventListener("DOMContentLoaded", function () {
    // Get hash from URL
    let hash = window.location.hash.substring(1); 

    if (hash) {
        let targetBtn = document.getElementById(hash);
        if (targetBtn) {
            // Simulate click on the filter button
            targetBtn.click();

            // Optional: Smooth scroll to projects section
            document.querySelector(".project-filters").scrollIntoView({ 
                behavior: "smooth" 
            });
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Get filter from URL (e.g., ?filter=residential)
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get("filter");

    if (filter) {
        // Remove active class from all filter buttons
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        // Highlight the selected filter button
        const activeBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (activeBtn) {
            activeBtn.classList.add("active");
        }

        // Show only matching projects
        document.querySelectorAll(".project-card").forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return; // nothing to do

  // Delegate clicks from the grid to cards (works for static + dynamic cards)
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (!card) return;

    // If user clicked an actual <a> (or inside it), do nothing so normal link works
    if (e.target.closest('a')) return;

    const link = card.getAttribute('data-link');
    if (!link || link === '#') return; // no target or upcoming

    // If there is an inner anchor that specifies target="_blank", respect it
    const innerAnchor = card.querySelector('a[target="_blank"]');

    if (innerAnchor) {
      window.open(link, '_blank', 'noopener');
    } else {
      // same-tab navigation
      window.location.href = link;
    }
  });
});
// ✅ Make entire project cards clickable (except "Upcoming" ones)
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    const link = card.getAttribute("data-link");

    // Only enable click + pointer for valid links
    if (link && link !== "#" && link.trim() !== "") {
      // show hand cursor
      card.style.cursor = "pointer";

      // handle click
      card.addEventListener("click", (e) => {
        // prevent click on the inner <a> tag from double triggering
        if (e.target.closest("a")) return;

        // go to the page
        window.location.href = link;
      });
    }
  });
});
