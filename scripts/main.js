const toggle = document.querySelector("#switch-input");
toggle.addEventListener("click", () => {
  const element = document.body;
  element.classList.toggle("dark-mode");

  const sectionHeadings = document.getElementsByClassName("section-heading");
  for (sectionHeading of sectionHeadings) {
    sectionHeading.classList.toggle("dark-mode-section-heading");
  }

  const cards = document.getElementsByClassName("card");
  for (card of cards) {
    card.classList.toggle("dark-mode-card");
  }

  const banner = document.querySelector(".profile");
  banner.classList.toggle("dark-mode-banner");

  const navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("dark-mode-banner");
});
