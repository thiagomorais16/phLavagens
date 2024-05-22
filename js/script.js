const navLinks = document.querySelectorAll("body");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const target = this.getAttribute("href");
    const targetElement = document.querySelector(target);

    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: offset - 80,
        behavior: "smooth",
      });
    }
  });
});
