document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully.");

  // Close offcanvas when any non-dropdown nav-link is clicked
  document
    .querySelectorAll(".offcanvas-body .nav-link:not(.dropdown-toggle)")
    .forEach((link) => {
      link.addEventListener("click", function () {
        const offcanvasElement = document.querySelector("#offcanvasDarkNavbar");
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        offcanvas.hide();
      });
    });

  // Manage dropdown behavior inside the offcanvas
  const dropdownLink = document.querySelector(".nav-item.dropdown > .nav-link");
  const dropdownMenu = dropdownLink.nextElementSibling;

  let isDropdownOpen = false;

  dropdownLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior

    if (isDropdownOpen) {
      // Close the dropdown
      dropdownMenu.classList.remove("show");
    } else {
      // Open the dropdown
      dropdownMenu.classList.add("show");
    }

    isDropdownOpen = !isDropdownOpen;
  });

  // Close dropdown when clicking outside, but keep the offcanvas open
  document.addEventListener("click", (e) => {
    if (!dropdownLink.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove("show");
      isDropdownOpen = false;
    }
  });
});


//   footer and button for back to top

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  const backToTopBtn = document.getElementById("backToTopBtn");
  const bottomMessage = document.getElementById("bottomMessage");
  let messageTimeout;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.style.opacity = 1; // Fully visible
          bottomMessage.style.display = "block"; // Show bottom message

          // Clear and reset timeout for hiding the message
          clearTimeout(messageTimeout);
          messageTimeout = setTimeout(() => {
            bottomMessage.style.display = "none";
          }, 1500);
        } else {
          footer.style.opacity = 0.5; // Transparent
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the footer is visible
  );

  observer.observe(footer);

  // Show "Back to Top" button on scroll
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", typeEffect);
// Welcome Section Dynamic effect typing starts
const phrases = [
  // "Welcome to My Portfolio! ", 
  "Discover My Journey & Achievements",
  "Explore My Skills & Projects.",
  "Your Next Tech Partner Awaits..",
  "Dedicated to Innovation & Excellence."
];

let index = 0;
let charIndex = 0;
const speed = 100; // Typing speed (in milliseconds)
const element = document.getElementById("dynamic-text");

// Function to simulate the typing effect of Welcome
function typeEffect() {
  if (charIndex < phrases[index].length) {
    element.textContent += phrases[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(eraseEffect, 2000); // Pause for 2 seconds before erasing
  }
}

// Function to simulate deleting the text of Welcome
function eraseEffect() {
  if (charIndex > 0) {
    element.textContent = phrases[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, speed);
  } else {
    index = (index + 1) % phrases.length; // Loop through the phrases
    setTimeout(typeEffect, speed);
  }
}

