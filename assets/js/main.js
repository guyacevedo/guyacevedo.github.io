/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


/*home*/
sr.reveal('.home-img', { delay: 200 });
sr.reveal('.home-social-icon', { delay: 200 });
sr.reveal('.home-scroll', { delay: 200 });
sr.reveal('.project-title', { delay: 100 });
sr.reveal('.project-description', { delay: 100 });
sr.reveal('.project-img', { delay: 200 });
sr.reveal('.button', { delay: 100 });

/*about*/
sr.reveal('.about-img', { delay: 200 });
sr.reveal('.about-description', { delay: 100 });
sr.reveal('.about-info', { delay: 100 });

/*skills*/

sr.reveal('.skills-title', { delay: 100 });
sr.reveal('.skills-subtitle', { delay: 100 });
sr.reveal('.skills-porcentage', { delay: 100 });
sr.reveal('.skills-icon', { delay: 100 });
sr.reveal('.skills-number', { delay: 100 });

/*experence*/

sr.reveal('.qualification-button', { delay: 100 });

/*portfolio*/

sr.reveal('.portfolio-img', { delay: 100 });

/*portfolio*/


sr.reveal('.contact-label', { delay: 100 });
sr.reveal('.contact-title', { delay: 100 });
sr.reveal('.contact-subtitle', { delay: 100 });
sr.reveal('.contact-icon', { delay: 100 });

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navLink = document.querySelectorAll('.nav-link');
/*==================== REMOVE MENU MOBILE ====================*/

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));


/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContets = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContets.forEach(tabContent => {
            tabContent.classList.remove('qualification-active');
        });
        target.classList.add('qualification-active');
        tabs.forEach(tab => {
            tab.classList.remove('qualification-active');
        });
        tab.classList.add('qualification-active');
    });
});


/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
    const nav = document.getElementById('header')
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/* ========================= SEND E-MAIL ================================================== */

function sendEmail() {

    const name_person = document.getElementById("name_person");
    const email_person = document.getElementById("email_person");
    const subject_person = document.getElementById("subject_person");
    const message_person = document.getElementById("message_person");
    const form_contact = document.getElementById("form_contact");

    if (name_person.value && email_person.value && subject_person.value && message_person.value) {
        event.preventDefault();
        Email.send({
            SecureToken: "755ddb5e-770d-4ef6-85b5-a6050df9dd1c",
            To: 'guy.acevedoa@gmail.com',
            From: email_person.value,
            Subject: subject_person.value,
            Body: "Hola soy, " + name_person.value + ".<br>" + message_person.value
        }).then(
            message => {
                if (message === "OK") {
                    alert("Contact email send succesfully")
                    form_contact.reset()
                } else {
                    alert(message)
                }
            }
        );

    } else {
        alert("You must complete all the fields of the contact form")
    }


}

/* Add Fecha copyright */

function setFecha() {
    document.getElementById('fecha').innerHTML = new Date().getFullYear();
}

setFecha();