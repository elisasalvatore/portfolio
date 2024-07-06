//-- back to the top button
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

//-- dark mode and local storage
const checkbox = document.getElementById( "changeTheme" ); //get the checkbox to a variable

//check storage if dark mode was on or off
if ( sessionStorage.getItem( "mode" ) == "dark" ) {
    darkmode(); //if dark mode was on, run this function
} else {
    nodark(); //else run this function
}

//if the checkbox state is changed, run a function
checkbox.addEventListener( "change", function () {
    //check if the checkbox is checked or not
    if ( checkbox.checked ) {
        darkmode(); //if the checkbox is checked, run this function
    } else {
        nodark(); //else run this function
    }
} );

//function for checkbox when checkbox is checked
function darkmode() {
    document.body.classList.add( "dark-mode" ); //add a class to the body tag
    checkbox.checked = true; //set checkbox to be checked state
    sessionStorage.setItem( "mode", "dark" ); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark() {
    document.body.classList.remove( "dark-mode" ); //remove added class from body tag
    checkbox.checked = false; //set checkbox to be unchecked state
    sessionStorage.setItem( "mode", "light" ); //store a name & value to know that dark mode is off or light mode is on
}