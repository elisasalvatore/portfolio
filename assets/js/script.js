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

// dark mode
var checkbox = document.querySelector( 'input[name=mode]' );

checkbox.addEventListener( 'change', function () {
    if ( this.checked ) {
        trans();
        document.documentElement.setAttribute( 'data-theme', 'dark' );
        document.querySelector( ".navbar" ).setAttribute( 'data-theme', 'dark' );
        document.querySelector( "footer" ).setAttribute( 'data-theme', 'dark' );
        document.querySelector( ".offcanvas" ).setAttribute( 'data-theme', 'dark' );
    } else {
        trans();
        document.documentElement.setAttribute( 'data-theme', 'light' );
        document.querySelector( ".navbar" ).setAttribute( 'data-theme', 'light' );
        document.querySelector( "footer" ).setAttribute( 'data-theme', 'light' );
        document.querySelector( ".offcanvas" ).setAttribute( 'data-theme', 'light' );
    }
} );

let trans = () => {
    document.documentElement.classList.add( 'transition' );
    window.setTimeout( () => {
        document.documentElement.classList.remove( 'transition' );
    }, 1000 );
};