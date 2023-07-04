// Scroll to the top button
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 300) {           //Show backToTopButton
    backToTopButton.style.display = "block";
  }
  else {                  //Hide backToTopButton
    backToTopButton.style.display = "none";
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}




// ----------- Script for Subscribe Box ----------------//
const subscribeContainerEl = document.getElementById('subscribe-container')
const leftEl = document.getElementById('left')
const rightEl = document.getElementById('right')

const userEmailEl = document.getElementById('user-email')
const invalidEmailEl = document.getElementById('invalid-email')
const emailInput = document.getElementById('email')
const submitBtnEl = document.getElementById('submit-btn')


const confirmedMessageEl = document.getElementById('confirmed-message')
const dismissMessageEl = document.getElementById('dismiss-message')

function formSuccess() {
  confirmedMessageEl.classList.add('active')
  subscribeContainerEl.classList.add('success')
  leftEl.style.display = 'none'
  rightEl.style.display = 'none'
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

submitBtnEl.addEventListener('click', (e) => {
  e.preventDefault()
  const email = emailInput.value.trim()

  if(validateEmail(email)) {
    formSuccess()
    userEmailEl.innerText = email
    emailInput.value = ''

    invalidEmailEl.classList.remove('active')
    emailInput.classList.remove('active')
  } else {
    invalidEmailEl.classList.add('active')
    emailInput.classList.add('active')
  }
})

dismissMessageEl.addEventListener('click', () => {
  leftEl.style.display = 'block'
  rightEl.style.display = 'block'
  subscribeContainerEl.classList.remove('success')
  confirmedMessageEl.classList.remove('active')
})


// ----------- Script for SLIDER
const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');

var sectionIndex = 0;
document.querySelectorAll('.controls li').forEach(function(indicator, ind){
  indicator.addEventListener('click', function() {
    sectionIndex = ind;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';

  });
});

leftArrow.addEventListener('click', function() {
  sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorParents.children[sectionIndex].classList.add('selected')
  slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
});

rightArrow.addEventListener('click', function() {
  sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorParents.children[sectionIndex].classList.add('selected')
  slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
});


