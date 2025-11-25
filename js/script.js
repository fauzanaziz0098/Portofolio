// cursor nih
const hoverTargets = document.querySelectorAll("a, button, .nav-link");
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
  });
});

const navLinks = document.querySelectorAll(".nav-cust-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// animation scroll
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-animate");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const hiddenElements = document.querySelectorAll(
    ".hidden-fade-up, .hidden-fade-left, .hidden-fade-right"
  );

  hiddenElements.forEach((el) => observer.observe(el));
});
