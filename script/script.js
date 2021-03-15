// mobileMenu

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLogo = document.querySelector('#navbar-logo')
const body = document.querySelector('body')

const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
  body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// animation

gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero', {
  scrollTrigger: {
    trigger: ".animate-hero",
  },
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3
});

gsap.from('.animate-services', {
  scrollTrigger: {
    trigger: ".animate-services",
    start: "top 75%", 
  },
  duration: 0.5,
  opacity: 1,
  x: -150,
  stagger: 0.12
});

gsap.from('.animate-img', {
  scrollTrigger: {
    trigger: ".animate-img",
    start: "top 75%", 
  },
  duration: 1.2,
  opacity: 0,
  x: -200,
});

gsap.from('.animate-membership', {
  scrollTrigger: {
    trigger: ".animate-membership",
    start: "top 75%", 
  },
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.5
});

gsap.from('.animate-card', {
  scrollTrigger: {
    trigger: ".animate-card",
    start: "top 75%", 
  },
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.1,
  delay: 0.2
});

gsap.from('.animate-team', {
  scrollTrigger: {
    trigger: ".animate-team",
    start: "top 75%", 
  },
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.2
});

gsap.from('.animate-email', {
  scrollTrigger: {
    trigger: ".animate-email",
    start: "top 75%", 
  },
  duration: 0.8,
  opacity: 0,
  y: -150,
  stagger: 0.25,
  delay: 0.6
});