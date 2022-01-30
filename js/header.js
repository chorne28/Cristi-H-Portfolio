const text = document.querySelector('.h_effect') // select what's in the class
const strText = text.textContent // returns the text content from .h_effect
const splitText = strText.split('') // split the text in an array

text.textContent = ''
for (let i = 0; i < splitText.length; i++) {
  // loop through the array
  text.innerHTML += '<span class="span_effect">' + splitText[i] + '</span>' //add a span for each letter
}

let char = 0
let timer = setInterval(onTick, 80) //setting an interval every 80 ms with the function onTick

function onTick() {
  //looping through
  const span = text.querySelectorAll('span')[char]
  span.classList.add('fade')
  char++
  if (char === splitText.length) {
    complete() //stop the loop with complete() function bellow
    return
  }
}

function complete() {
  clearInterval(timer) //reset the timer
  timer = null
}

/* Current page effect on Nav Menu */

currentPage(document.querySelectorAll('.show_current_page'))
function currentPage(select) {
  for (let i = 0; i < select.length; i++) {
    select[i].addEventListener('click', function (e) {
      let current = this
      for (let i = 0; i < select.length; i++) {
        if (current != select[i]) {
          select[i].classList.remove('current_page')
        } else {
          current.classList.add('current_page')
        }
      }
    })
  }
}

const about = document.getElementById('about')
about.addEventListener('click', addClassToAbout)
function addClassToAbout() {
  const aboutMenu = document.getElementById('show_class')
  aboutMenu.classList.add('current_page')
}
