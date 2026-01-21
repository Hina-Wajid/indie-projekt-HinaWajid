const navToggles = document.querySelectorAll('.nav-toggle'); /* button that is burger menu */
const nav = document.getElementById('primary-nav');  /* navigation that has attribute aria-expanded */
const navList = document.querySelector('.nav-list'); /* menu in list form */

navToggles.forEach((navToggle) => {
    navToggle.addEventListener('click', () => {

        const open = navToggle.getAttribute('aria-expanded') === 'true';
        console.log(open);
        setExpanded(!open); /* send true or false to set value in expanded attribute */
    })
})

// navToggles.forEach(){
//     navToggle.addEventListener('click', () => {

//     const open = navToggle.getAttribute('aria-expanded')==='true';
//     console.log(open);
//     setExpanded(!open); /* send true or false to set value in expanded attribute */

// })
// }

function setExpanded(val) {
    navToggles.forEach((navToggle) => {
        navToggle.setAttribute('aria-expanded', val);
        nav.setAttribute('aria-expanded', val);
        /* after setting value to true or false, also change text for screen reader */
        if (val) {
            navToggle.setAttribute('aria-label', 'luk navigation')

        }

        else {
            navToggle.setAttribute('aria-label', 'åbn navigation')
        }
    })

}

// close on escape

document.addEventListener('keydown', (event) => {
    console.log(event);

    if (event.key === 'Escape' && nav.getAttribute('aria-expanded') === 'true') {
        setExpanded(false);
        navToggles[0].focus();
    }
}
);

// ensure state resets when resizing to wider screens

// const mq =window.matchMedia('min-width:961px');
const mq = window.matchMedia('(min-width: 961px)');


// window.addEventListener("resize",  test)
// function test(){
//    // console.log("hej");
//     console.log(mq);

// }
function handleChange() {
    console.log('hello')
    if (mq.matches) {
        // Wider than breakpoint -> ensure menu visible and aria attributes false/hidden
        navToggles.forEach((navToggle) => {
            navToggle.setAttribute('aria-expanded', 'false');
            nav.setAttribute('aria-expanded', 'false');

        })
    }
}

mq.addEventListener('change', handleChange);

// close menu when a link is clicked (mobile)

navList.addEventListener('click', (event) => {
    console.log(event.target.tagName);
    console.log(window.matchMedia('(max-width: 1024px)').matches);
    if (event.target.tagName === 'A' && window.matchMedia('(max-width: 1024px)').matches) {
       
       
        setExpanded(false);
    }


})


// question:  mediachange, escape and a link is not working
// halloween burger menu close button
// menu get closed when touched outside on screen
// can we use dialog instead
// menu comes on top of picture or take whole width--