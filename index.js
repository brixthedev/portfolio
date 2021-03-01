/* Navigation */

const faBars = document.getElementById("fa-bars")
const faTimes = document.getElementById("fa-times")
const navMobile = document.getElementById("nav-mobile")
const navContainer = document.getElementById("nav-container")

faBars.addEventListener("click", () => {
  navMobile.classList.add("visible")
})

faTimes.addEventListener("click", () => {
  navMobile.classList.remove("visible")
})

window.addEventListener("scroll", () => {
  if (window.scrollY > navContainer.offsetHeight - 50) {
    navContainer.classList.add("active")
  } else {
    navContainer.classList.remove("active")
  }
})
