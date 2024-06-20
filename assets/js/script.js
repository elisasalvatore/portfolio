// back to the top button
const backTopBtn = document.querySelector( '.btn-back-top' );
window.addEventListener( 'scroll', checkHeight );

function checkHeight() {
    if ( window.scrollY > 500 ) {
        backTopBtn.style.display = 'flex';
    } else {
        backTopBtn.style.display = 'none';
    };
};

backTopBtn.addEventListener( 'click', () => {
    window.scrollTo( {
        top: 0,
        behavior: 'smooth',
    } );
} );