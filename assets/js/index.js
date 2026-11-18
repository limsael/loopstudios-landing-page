const navBar = document.getElementById("nav");
const toggleButton = document.querySelector(".header__toggle");
const closeButton = document.querySelector(".nav__close");

/** * Toggle the navigation menu
 */

function toggleMenu() {
  const isOpen = navBar.classList.toggle("active");

  toggleButton.setAttribute("aria-expanded", isOpen);

  if (isOpen) {
    closeButton.focus();
  }
}

/** * Close the navigation menu
 */

function closeMenu() {
  navBar.classList.remove("active");
  toggleButton.setAttribute("aria-expanded", false);

  toggleButton.focus();
}

/** * Close the navigation menu with the Escape key
 */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navBar.classList.contains("active")) {
    closeMenu();
  }
});

/** * Event Listeners
 */

toggleButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", closeMenu);
