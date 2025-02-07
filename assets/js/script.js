'use strict';
// Website loaded successfully
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully.");

  // Disable F12, Ctrl+Shift+I (Inspect Element), and Ctrl+C (Copy)
  document.addEventListener('keydown', function(e) {
      if (
          e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') || 
          (e.ctrlKey && e.key === 'c') // Disable Ctrl + C
      ) {
          e.preventDefault();
      }
  });

  // Disable right-click context menu
  document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
  }, false);
});


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input fields
formInputs.forEach(input => {
  input.addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// form submission handler
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const formData = new FormData(form);
  const fullName = formData.get("fullname");
  const email = formData.get("email");
  const message = formData.get("message");

  // Create the WhatsApp message
  // const whatsappMessage = `Hello!%0A%0AName: ${fullName}%0AEmail: ${email}%0AMessage: ${message}`;
  const whatsappMessage = `Hello!, I am redirected from your Portfolio.%0A%0AName: ${fullName}%0AEmail: ${email}%0AMessage: ${message}`;

  // Construct the WhatsApp link
  const whatsappLink = `https://wa.me/9155105123?text=${whatsappMessage}`;

  // Redirect to WhatsApp
  window.open(whatsappLink, "_blank");

  // Optionally reset the form after submission
  form.reset();
});




// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Here is JS for Modal Functionality:
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('projectModal');
  const closeButton = document.querySelector('.close-btn');
  const modalTriggerElements = document.querySelectorAll('[data-modal-trigger]');

  // Function to open modal and populate it with the correct data
  const openModal = (projectId) => {
    const project = projectDetails[projectId];
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-description').textContent = project.description;
    const skillsList = modal.querySelector('.modal-skills');
    skillsList.innerHTML = ""; // Clear previous skills
    project.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });
    modal.style.display = 'block';
  };

  // Attach click event to modal trigger icons
  modalTriggerElements.forEach(item => {
    item.addEventListener('click', (e) => {
      const projectId = item.getAttribute('data-modal-trigger');
      openModal(projectId); // Open modal and pass the project ID
    });
  });

  // Close modal when the close button is clicked
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal if the user clicks outside of the modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Get the modal
const projectDetails = {
  1: {
    title: "Cloud Computing Graded Assignment - DevOps",
    description: `Create an Autoscaling group using Terraform on AWS. The instances in the group should have Nginx installed on them. Parameters in the ASG can be set at your discretion and should be mentioned in the solution documentation. Any variables in the script should be placed in a separate variable.tf file. The script's output should be the DNS of the associated load balancer.`,
    skills: ["Terraform", "AWS", "Nginx", "ASG", "DNS"]
  },
  2: {
    title: "Cloud Computing Graded Assignment - AWS Advanced",
    description: `Create a MySQL instance using RDS and access it using a custom program from an EC2 instance using an appropriate role.`,
    skills: ["RDS", "EC2", "EC2 Database", "7 step workflow", "SSH", "MySQL"]
  },
  3: {
    title: "Team Communication Architecture",
    description: `Team communication and instant messaging solutions are an integral part of any business environment today. Some organizations prefer solutions that can be managed and hosted on servers controlled by them rather than using third-party services like Slack or Microsoft Teams.`,
    skills: ["MySQL", "Amazon Linux 2", "VPC", "Subnet", "NAT Gateway"]
  },
  4: {
    title: "Managing Movie List",
    description: `The project aims to create a website where we maintain the latest films, Upcoming films, Top-rated movies along with their details and manage user favorites.`,
    skills: ["React Js", "CSS", "TypeScript", "Axios APIs", "JSON Server", "React Bootstrap"]
  },
  5: {
    title: "Filter Resume by Designation",
    description: `The application aims to search for a specific group of Resume/s which helps the HR department filter Resumes based on the role applied from the list of applications.`,
    skills: ["HTML", "CSS", "Advanced JavaScript", "DOM Manipulation", "Fetch API", "Async..await", "JSON"]
  },
  6: {
    title: "HTML & CSS Project",
    description: `This project aims to create a webpage for pharma products and design a form for lab tests. The users should be able to book slots for their lab tests.`,
    skills: ["Layout tags", "Form design", "Selectors", "Animation", "Class and Id styling"]
  },
  7: {
    title: "Rest API Web Application",
    description: `The project aims to create an Employee Management Web App, where the DAO layer is performed with Hibernate. Admins can Display, Update, Add new entries of employees, and Delete an employee from the database. The entire Web App is developed on the MVC design paradigm. Spring Security is added for authentication.`,
    skills: ["Spring", "Hibernate", "JSP", "MVC design paradigm", "Mappings", "Spring Security", "Rest API"]
  },
  8: {
    title: "Spring MVC",
    description: `The project aims to create a Customer Management Web App, where the DAO layer is performed with Hibernate. Admins can Display, Update, Add new entries of customers, and Delete a customer from the database. The entire Web App is developed on the MVC design paradigm.`,
    skills: ["Spring", "Hibernate", "JSP", "MVC design paradigm", "Mappings"]
  },
  9: {
    title: "Data Structures and Algorithms",
    description: `This project aims to give a construction layout of a skyscraper based on the floor area constructed on a particular day. In the second part of the project, we change a complete binary tree to a skewed tree based on the requirement.`,
    skills: ["Queue", "Linkedlist", "Stacks", "OOPs", "Clean Coding", "BST"]
  },
  10: {
    title: "OOPs",
    description: `The system manages four departments: HR, Admin, Tech, each department will provide information on departmentName, today'sWork, workDeadline, and activity. Super Department is the parent class for all the other departments and will return common information like Holiday details.`,
    skills: ["Inheritance", "Polymorphism", "Encapsulation", "Access Modifiers", "Clean Coding"]
  }
};


