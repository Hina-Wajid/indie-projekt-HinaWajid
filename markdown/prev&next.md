function nextSlide()
{
    if(current < total -  1)   // if current is less total is total number of slide - 1, because array zero sy start hai
        {
            current++;      // if it is less than total number of slides , than go to next , you are not at last slide
            updateUl();        // update view
        }
       /*  else
        {
            current = 0;
            console.log(current);
            updateUl();
            
        } */
}
function prevSlide()
{
    if(current >  0)  // if current slide # you are at , is not zero
        {
            current--;
            updateUl();
        }
        // else got to last slide
        // {
        //     current = total-1;
        //     console.log(current);
        //     updateUl();
            
        // }
    
}