const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const pageMap = {
  about: "about",
  resume: "resume",
  projects: "projects",
  contact: "contact",
};

navigationLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    const buttonText = this.innerHTML.toLowerCase();

    const targetPage = pageMap[buttonText];

    if (!targetPage) {
      return;
    }

    pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
      }
    });

    navigationLinks.forEach((link) => {
      if (link === this) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});
