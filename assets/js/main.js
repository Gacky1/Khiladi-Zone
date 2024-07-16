/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
// Copy coupon

const span = document.querySelector(".coupon");

span.onclick = function() {
  // Create a temporary textarea element
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = span.textContent;
  
  // Append it to the body
  document.body.appendChild(tempTextarea);
  
  // Select the text in the textarea element
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999); // For mobile devices
  
  // Execute the copy command
  document.execCommand("copy");
  
  // Remove the temporary textarea element
  document.body.removeChild(tempTextarea);

  // Optional: Provide feedback to the user
  console.log("Copied text: " + tempTextarea.value);
  alert("Copied the text: " + tempTextarea.value);
};

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title`,{delay: 250})
sr.reveal(`.home__footer`,{delay: 350})
sr.reveal(`.home__img`,{delay: 550, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 30})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 30})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)


const openPopupBtn = document.querySelector('.open-popup-btn');
    const popupOverlay = document.querySelector('.popup-overlay');
    const closePopupBtn = document.querySelector('.close-popup-btn');

    // Show popup
    openPopupBtn.addEventListener('click', function() {
        popupOverlay.style.display = 'flex';
    });

    // Close popup
    closePopupBtn.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });

    // Close popup when clicking outside the content
    window.addEventListener('click', function(event) {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
    });