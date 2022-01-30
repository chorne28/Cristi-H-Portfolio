/* Open Close effect on Toggle Menu */
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', hamburger)
toggle.addEventListener('click', showMenu)

function hamburger() {
  toggle.classList.toggle('active')
}
function showMenu() {
  mobile_nav.classList.toggle('showNav')
}
