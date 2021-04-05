'use strict';
/*
//Movie category becomes sticky when scrolling

const category = document.querySelector('.category');
const categoryHeight = category.getBoundingClientRect().height;
console.log(categoryHeight);
document.addEventListener('scroll', () => {
    console.log(window.scrollY);    
    console.log(`categoryHeight : ${categoryHeight}`);    
    if (window.scrollY > categoryHeight) {
      category.classList.add('category--background');
    } else {
      category.classList.remove('category--background');
    }
});
*/

//Classify movie genres when clicked

const btnContainer = document.querySelector('.category');
const movieContainer = document.querySelector('.movies');
const movies = document.querySelectorAll('.movie');
console.log(btnContainer);
console.log(movieContainer);
console.log(movies);

btnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;
    if (filter == null) {
      return;
    }
    console.log(filter);
    movies.forEach((movie) => {
        console.log(movie.dataset.type);
        if (filter === '*' || filter === movie.dataset.type) {
            movie.classList.remove('invisible');
        } else {
            movie.classList.add('invisible');
        }
    });
});