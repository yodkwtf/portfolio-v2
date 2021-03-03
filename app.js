// ********** set date ************
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();

// ********** sidebar ************
const navBtn = document.querySelector('.nav-btn');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

navBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

// ********** navbar fixed ************
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navHeight) {
    nav.classList.add('nav-fixed');
  } else {
    nav.classList.remove('nav-fixed');
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();
    // select target element
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // check if nav is fixed or not
    const isNavFixed = nav.classList.contains('nav-fixed');
    const navHeight = nav.getBoundingClientRect().height;
    // change position
    let position = element.offsetTop - navHeight;
    if (!isNavFixed) {
      position = position - navHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    sidebar.classList.remove('show-sidebar');
  });
});
