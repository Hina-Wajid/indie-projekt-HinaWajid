const gallery = document.querySelector(".gallery");  /* get div that wrap gallery ul */
const gallery__ul = gallery.querySelector(".gallery__ul");  /* inside it we have gallery in ul list form */
const slides = gallery.querySelectorAll("li");   /* get all the pcitures listed */
const next = gallery.querySelector(".next");    /* arrow sign on pciture to next -right */
const prev = gallery.querySelector(".prev");    /* arrow sign on picture to scroll left */
const dotsWrapper = gallery.querySelector(".dots-wrapper");  /* dot or thumbnail on the underneath picture gallery */
let current =0; /* to begin with we have picture number one in the list as zero */
let total =slides.length;  /* this is the total number of pictures/slides */

let dots =[];  /* empty array taht will contain dots to keep it dynamic not fixed number of dots */

/* now that we have access ul -li slides in variable . access each li 
1. check if index is zero that add class active to it . for highlighting thumbnail may be
for each has element i.e LI  & index number of each li in order of delcaration index[0] has first picture of slide */

slides.forEach((slide, index)=>{
   
    if(index == 0){slide.classList.add(".active")}

    /* 2. create dots underneath in li form by adding svg circle, create LI using JavaScript and adding svg in it*/

const svg = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="50" cy="50" r="40" />'
const li =document.createElement('li');
li.innerHTML =svg;
li.addEventListener('click', ()=>{ goToSlides(index)})
if(index==0) {li.classList.add("active")}
dotsWrapper.appendChild(li);
dots.push(li);
})

function goToSlides(index)
{
 current = index;
 updateUl();   
}
function nextSlide()
{
    if(current < total -  1)   // if current is less total is total number of slide - 1, because array zero sy start hai
        {
            current++;      // if it is less than total number of slides , than go to next , you are not at last slide
            updateUl();        // update view
        }
        else
        {
            current = 0;
            console.log(current);
            updateUl();
            
        } 
  
}
function prevSlide()
{
    if(current >  0)  // if current slide # you are at , is not zero
        {
            current--;
            updateUl();
        }
          else
        {
            current = total - 1;
            console.log(current);
            updateUl();
            
        } 
         
}
function updateUl() {
    gallery__ul.style.transition = "transform .5s ease-in-out";
    gallery__ul.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot)=>{dot.classList.remove("active")})
    dots[current].classList.add("active");
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

/* COPIED FROM SUGGESTED CODE TO UPDATE VIEW OF SLIDES
 function updateUl() {
    const slides = document.querySelectorAll('#slider li');
    slides.forEach((slide, index) => {
        slide.style.display = (index === current) ? 'block' : 'none';
    });
} */ 


/* SAME CODE FOR slides.forEach LINE  # 10 TO 29 

 let dots = Array.from(slides).map((slide, index)=>{
   
if(index == 0){slide.classList.add(".active")}
const svg = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="50" cy="50" r="40" />'
const li =document.createElement('li');
li.innerHTML =svg;
li.addEventListener('click', ()=>{ goToSlides(index)})
if(index==0) {li.classList.add("active")}
dotsWrapper.appendChild(li);
return li;
}) */