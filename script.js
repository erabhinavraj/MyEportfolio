document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully.");

  // Disable F12 and Ctrl+Shift+I for opening Developer Tools
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

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

// Objective 
// Wait for the DOM content to be fully loaded before starting the typing effect
document.addEventListener("DOMContentLoaded", function () {
  typeEffectObj();  // Trigger typing effect for the Objective section
});

// Objective Section Text with <br> for line breaks and <strong> for bold text
const objectiveText = `I'm an experienced Software Developer at Tata Consultancy Services Pvt. Ltd. since January 2022, contributing to the growth of one of Asia's leading MNCs.

With over 2 years of expertise in Java, JavaScript, HTML5, CSS, Node.js, SQL, and more than 3 years of overall experience in the tech industry, I bring a strong foundation in delivering innovative solutions.
Currently, I am an aspiring Java Full Stack Developer, honing my skills through a program at IIT Roorkee.`;

let objCharIndex = 0; // Character index for Objective section
const objSpeed = 30; // Increased speed of typing effect (faster typing)
const objElement = document.getElementById("dynamic-text-obj"); // Element for Objective text

// Function to simulate the typing effect for the Objective section
function typeEffectObj() {
  if (objCharIndex < objectiveText.length) {
    objElement.innerHTML += objectiveText.charAt(objCharIndex);
    objCharIndex++;
    setTimeout(typeEffectObj, objSpeed); // Continue typing with increased speed
  }
}

// Experience 
// Wait for the DOM content to be fully loaded before starting the typing effects
document.addEventListener("DOMContentLoaded", function () {
  // Trigger typing effects for different sections of Experience
  typeEffectTCS();      // TCS Company Name and Role
  typeEffectRoleTCS();  // TCS Role
  typeEffectAlobha();   // Alobha Company Name and Role
  typeEffectRoleAlobha(); // Alobha Role
  typeEffectQuickHeal(); // QuickHeal Company Name and Role
  typeEffectRoleQuickHeal(); // QuickHeal Role
  typeEffectTechStacks(); // Tech stacks for TCS and Alobha
});

// Dynamic Typing for TCS Company Name
const tcsText = "Tata Consultancy Services";
let tcsCharIndex = 0;
const tcsSpeed = 80;  // Speed of typing for TCS
const tcsElement = document.getElementById("dynamic-tcs");

function typeEffectTCS() {
  if (tcsCharIndex < tcsText.length) {
    tcsElement.textContent += tcsText.charAt(tcsCharIndex);
    tcsCharIndex++;
    setTimeout(typeEffectTCS, tcsSpeed);
  }
}

// Dynamic Typing for TCS Role
const roleTCS = "Developer";
let roleTCSIndex = 0;
const roleTCSElement = document.getElementById("dynamic-role-tcs");

function typeEffectRoleTCS() {
  if (roleTCSIndex < roleTCS.length) {
    roleTCSElement.textContent += roleTCS.charAt(roleTCSIndex);
    roleTCSIndex++;
    setTimeout(typeEffectRoleTCS, tcsSpeed);
  }
}

// Dynamic Typing for Alobha Company Name
const alobhaText = "Alobha Technology";
let alobhaCharIndex = 0;
const alobhaSpeed = 80;  // Speed of typing for Alobha
const alobhaElement = document.getElementById("dynamic-alobha");

function typeEffectAlobha() {
  if (alobhaCharIndex < alobhaText.length) {
    alobhaElement.textContent += alobhaText.charAt(alobhaCharIndex);
    alobhaCharIndex++;
    setTimeout(typeEffectAlobha, alobhaSpeed);
  }
}

// Dynamic Typing for Alobha Role
const roleAlobha = "Intern Full Stack Developer";
let roleAlobhaIndex = 0;
const roleAlobhaElement = document.getElementById("dynamic-role-alobha");

function typeEffectRoleAlobha() {
  if (roleAlobhaIndex < roleAlobha.length) {
    roleAlobhaElement.textContent += roleAlobha.charAt(roleAlobhaIndex);
    roleAlobhaIndex++;
    setTimeout(typeEffectRoleAlobha, alobhaSpeed);
  }
}

// Dynamic Typing for QuickHeal Company Name
const quickHealText = "Quick Heal Pvt Ltd";
let quickHealCharIndex = 0;
const quickHealSpeed = 80;  // Speed of typing for Quick Heal
const quickHealElement = document.getElementById("dynamic-quickheal");

function typeEffectQuickHeal() {
  if (quickHealCharIndex < quickHealText.length) {
    quickHealElement.textContent += quickHealText.charAt(quickHealCharIndex);
    quickHealCharIndex++;
    setTimeout(typeEffectQuickHeal, quickHealSpeed);
  }
}

// Dynamic Typing for QuickHeal Role
const roleQuickHeal = "Intern";
let roleQuickHealIndex = 0;
const roleQuickHealElement = document.getElementById("dynamic-role-quickheal");

function typeEffectRoleQuickHeal() {
  if (roleQuickHealIndex < roleQuickHeal.length) {
    roleQuickHealElement.textContent += roleQuickHeal.charAt(roleQuickHealIndex);
    roleQuickHealIndex++;
    setTimeout(typeEffectRoleQuickHeal, quickHealSpeed);
  }
}

// Dynamic Typing for Tech Stacks in TCS and Alobha
const techStackTCS = ["JAVA Full Stack", "JavaScript", "SQL", "HTML5", "CSS"];
let techStackIndex = 0;
let techStackItemIndex = 0;
const techStackSpeed = 50;
const techStackElement = document.getElementById("dynamic-stack-tcs");

function typeEffectTechStacks() {
  if (techStackItemIndex < techStackTCS.length) {
    if (techStackIndex < techStackTCS[techStackItemIndex].length) {
      techStackElement.innerHTML += techStackTCS[techStackItemIndex].charAt(techStackIndex);
      techStackIndex++;
      setTimeout(typeEffectTechStacks, techStackSpeed);
    } else {
      techStackItemIndex++;
      techStackIndex = 0;
      techStackElement.innerHTML += "<br>"; // Add line break after each tech stack item
      setTimeout(typeEffectTechStacks, 500); // Pause before typing next item
    }
  }
}

// Skills 
// Wait for the DOM content to be fully loaded before starting the typing effects
document.addEventListener("DOMContentLoaded", function () {
  // Trigger typing effects for different skill items
  typeEffectSkill1();  // Java Full Stack Developer
  typeEffectSkill2();  // JavaScript
  typeEffectSkill3();  // HTML5
  typeEffectSkill4();  // CSS
  typeEffectSkill5();  // SQL
  typeEffectSkill6();  // React Js
  typeEffectSkill7();  // Spring Boot
  typeEffectSkill8();  // Git & GitHub
  typeEffectSkill9();  // Python
  typeEffectSkill10(); // View my Resume
});

// Dynamic Typing for Java Full Stack Developer
const skill1Text = "Java Full Stack Developer (Certified from IIT Roorkee)";
let skill1Index = 0;
const skill1Speed = 80; // Speed of typing for skill 1
const skill1Element = document.getElementById("dynamic-skill-1");

function typeEffectSkill1() {
  if (skill1Index < skill1Text.length) {
    skill1Element.textContent += skill1Text.charAt(skill1Index);
    skill1Index++;
    setTimeout(typeEffectSkill1, skill1Speed);
  }
}

// Dynamic Typing for JavaScript
const skill2Text = "JavaScript";
let skill2Index = 0;
const skill2Speed = 80; // Speed of typing for skill 2
const skill2Element = document.getElementById("dynamic-skill-2");

function typeEffectSkill2() {
  if (skill2Index < skill2Text.length) {
    skill2Element.textContent += skill2Text.charAt(skill2Index);
    skill2Index++;
    setTimeout(typeEffectSkill2, skill2Speed);
  }
}

// Dynamic Typing for HTML5
const skill3Text = "HTML5";
let skill3Index = 0;
const skill3Speed = 80; // Speed of typing for skill 3
const skill3Element = document.getElementById("dynamic-skill-3");

function typeEffectSkill3() {
  if (skill3Index < skill3Text.length) {
    skill3Element.textContent += skill3Text.charAt(skill3Index);
    skill3Index++;
    setTimeout(typeEffectSkill3, skill3Speed);
  }
}

// Dynamic Typing for CSS
const skill4Text = "CSS (Cascading Style Sheet)";
let skill4Index = 0;
const skill4Speed = 80; // Speed of typing for skill 4
const skill4Element = document.getElementById("dynamic-skill-4");

function typeEffectSkill4() {
  if (skill4Index < skill4Text.length) {
    skill4Element.textContent += skill4Text.charAt(skill4Index);
    skill4Index++;
    setTimeout(typeEffectSkill4, skill4Speed);
  }
}

// Dynamic Typing for SQL
const skill5Text = "SQL";
let skill5Index = 0;
const skill5Speed = 80; // Speed of typing for skill 5
const skill5Element = document.getElementById("dynamic-skill-5");

function typeEffectSkill5() {
  if (skill5Index < skill5Text.length) {
    skill5Element.textContent += skill5Text.charAt(skill5Index);
    skill5Index++;
    setTimeout(typeEffectSkill5, skill5Speed);
  }
}

// Dynamic Typing for React Js
const skill6Text = "React Js";
let skill6Index = 0;
const skill6Speed = 80; // Speed of typing for skill 6
const skill6Element = document.getElementById("dynamic-skill-6");

function typeEffectSkill6() {
  if (skill6Index < skill6Text.length) {
    skill6Element.textContent += skill6Text.charAt(skill6Index);
    skill6Index++;
    setTimeout(typeEffectSkill6, skill6Speed);
  }
}

// Dynamic Typing for Spring Boot
const skill7Text = "Spring Boot";
let skill7Index = 0;
const skill7Speed = 80; // Speed of typing for skill 7
const skill7Element = document.getElementById("dynamic-skill-7");

function typeEffectSkill7() {
  if (skill7Index < skill7Text.length) {
    skill7Element.textContent += skill7Text.charAt(skill7Index);
    skill7Index++;
    setTimeout(typeEffectSkill7, skill7Speed);
  }
}

// Dynamic Typing for Git & GitHub
const skill8Text = "Git & GitHub (Version Control)";
let skill8Index = 0;
const skill8Speed = 80; // Speed of typing for skill 8
const skill8Element = document.getElementById("dynamic-skill-8");

function typeEffectSkill8() {
  if (skill8Index < skill8Text.length) {
    skill8Element.textContent += skill8Text.charAt(skill8Index);
    skill8Index++;
    setTimeout(typeEffectSkill8, skill8Speed);
  }
}

// Dynamic Typing for Python
const skill9Text = "Python (Certified from Microsoft)";
let skill9Index = 0;
const skill9Speed = 80; // Speed of typing for skill 9
const skill9Element = document.getElementById("dynamic-skill-9");

function typeEffectSkill9() {
  if (skill9Index < skill9Text.length) {
    skill9Element.textContent += skill9Text.charAt(skill9Index);
    skill9Index++;
    setTimeout(typeEffectSkill9, skill9Speed);
  }
}

// Dynamic Typing for View Resume
const skill10Text = "View my Resume";
let skill10Index = 0;
const skill10Speed = 80; // Speed of typing for skill 10
const skill10Element = document.getElementById("dynamic-skill-10");

function typeEffectSkill10() {
  if (skill10Index < skill10Text.length) {
    skill10Element.textContent += skill10Text.charAt(skill10Index);
    skill10Index++;
    setTimeout(typeEffectSkill10, skill10Speed);
  }
}
