

ScrollReveal({
    reset: true,
    distance :'60px' ,
    duration: 2500,
    delay: 200
});

ScrollReveal().reveal('.header, .bigheader', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.smallheader', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('#work', { delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.mywork', { delay: 500, origin: 'bottom', interval: 200 });