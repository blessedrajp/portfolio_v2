// ============active navbar logic ============

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
  
        // Remove the active class from all links
        navLinks.forEach((nav) => nav.classList.remove("active"));
  
        // Add the active class to the clicked link
        link.classList.add("active");
      });
    });
  });



//   =============