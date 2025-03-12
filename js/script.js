// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top < offset + height) {
            // active navbar links 
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky sections
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    // remove toggle icon amd navebar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
}
const textElement = document.getElementById("animated-text");
const phrases = ["Python Developer","ML Engineer", "Data Analyst", "Software Developer"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeAnimation() {
    const currentPhrase = phrases[currentPhraseIndex];
    const displayedText = currentPhrase.slice(0, currentCharIndex);

    textElement.textContent = displayedText;

    if (isDeleting) {
        if (currentCharIndex > 0) {
            currentCharIndex--;
            setTimeout(typeAnimation, 100); // Speed while deleting
        } else {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(typeAnimation, 500); // Pause before typing the next phrase
        }
    } else {
        if (currentCharIndex < currentPhrase.length) {
            currentCharIndex++;
            setTimeout(typeAnimation, 150); // Speed while typing
        } else {
            isDeleting = true;
            setTimeout(typeAnimation, 1000); // Pause before deleting
        }
    }
}

typeAnimation();
const roles2 =["Python Developer","Machine Learning Engineer", "Data Analyst", "Software Developer"];
const textElement2 = document.getElementById("animated-text-2");
let roleIndex2 = 0;
let charIndex2 = 0;
let isDeleting2 = false;

function typeWriter2() {
    const currentRole2 = roles2[roleIndex2];
    
    if (isDeleting2) {
        // Delete the text by reducing the length
        textElement2.textContent = currentRole2.substring(0, charIndex2);
        charIndex2--;
    } else {
        // Write the text by increasing the length
        textElement2.textContent = currentRole2.substring(0, charIndex2);
        charIndex2++;
    }

    // Speed control
    let speed2 = isDeleting2 ? 50 : 100;

    // Check if the typing is complete
    if (!isDeleting2 && charIndex2 > currentRole2.length) {
        speed2 = 1500; // Pause before deleting
        isDeleting2 = true;
    } else if (isDeleting2 && charIndex2 < 0) {
        isDeleting2 = false;
        roleIndex2 = (roleIndex2 + 1) % roles2.length; // Move to the next role
        speed2 = 500; // Pause before typing the next role
    }

    setTimeout(typeWriter2, speed2);
}

document.addEventListener("DOMContentLoaded", typeWriter2);
