'use strict';

// const menu = document.querySelector('#menu');
// const body = document.querySelector('.page__body');

// menu.addEventListener('click', () => {

// });

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});
