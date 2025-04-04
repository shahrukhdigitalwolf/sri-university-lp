/* document.addEventListener("DOMContentLoaded", function () {
    new Splide("#software-slider", {
      type   : 'loop',
      perPage: 8,
      perMove: 4,
      arrows : false,
      pagination:true,
      autoplay: true,
      rewind     : true,
      rewindSpeed: 300,
      gap: '1rem',
      breakpoints: {
        1024  :{perPage: 4},
        767  :{perPage: 3},
        480  :{perPage: 3}
      },
    }).mount();
}) */

document.addEventListener("DOMContentLoaded", function () {
    new Splide("#career-prospects", {
      type   : 'loop',
      perPage: 4,
      arrows : false,
      pagination:true,
      autoplay: true,
      rewind     : true,
      rewindSpeed: 300,
      breakpoints: {
        1024  :{perPage: 2},
        767  :{perPage: 1, perMove: 3}
      },
    }).mount();
})

/* document.addEventListener("DOMContentLoaded", function () {
    new Splide("#Recognitions", {
      type   : 'loop',
      perPage: 7,
      arrows : false,
      pagination:true,
      autoplay: true,
      rewind     : true,
      rewindSpeed: 300,
      breakpoints: {
        1024  :{perPage: 5},
        767  :{perPage: 3}
      },
    }).mount();
}) */

document.addEventListener("DOMContentLoaded", function () {
    new Splide("#testimonials", {
      type   : 'loop',
      perPage: 2,
      arrows : false,
      pagination:true,
      autoplay: true,
      rewind     : true,
      rewindSpeed: 1500,
      gap: '1rem',
      breakpoints: {
        1024  :{perPage: 2},
        767  :{perPage: 1}
      },
    }).mount();
})

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#job-roles", {
    perPage: 4,
    arrows : false,
    pagination:true,
    /* autoplay: true,
    rewind     : true,
    rewindSpeed: 300, */
    gap: '1rem',
    breakpoints: {
      1024  :{perPage: 2},
      767  :{perPage: 1}
    },
  }).mount();
})

/* document.addEventListener("DOMContentLoaded", function () {
  new Splide("#placement-opportunities", {
    perPage: 7,
    type: 'loop',
    arrows : false,
    pagination:true,
    autoplay: true,
    rewind     : true,
    rewindSpeed: 300,
    gap: '1rem',
    breakpoints: {
      1024  :{perPage: 4},
      767  :{perPage: 3}
    },
  }).mount();
}) */

/* document.addEventListener("DOMContentLoaded", function () {
  new Splide("#course-highlight", {
    perPage: 5,
    arrows : false,
    pagination:true,
    autoplay: true,
    rewind     : true,
    rewindSpeed: 300,
    gap: '1rem',
    breakpoints: {
      1024  :{perPage: 3},
      767  :{perPage: 2}
    },
  }).mount();
}) */