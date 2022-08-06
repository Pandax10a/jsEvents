// code to target id dog_page, which is the img waiting on user to hover mouse over it.  when it does it calls the move_right function
document.querySelector(`#dog_page`).addEventListener(`mouseover`, move_right);
// makes the img move 500px to the right 
function move_right() {
    document.querySelector(`#dog_page`)[`style`][`transform`] = "translate(500px,0)";
}

// event listener for click on the h1 id tag and calls function when it does
document.getElementById(`h1_page`).addEventListener(`click`, rotate_this);
// rotates the h1_page id 100deg around the plane x
function rotate_this() {
    document.getElementById(`h1_page`)[`style`][`transform`] = "rotateX(100deg)";
}

document.body.addEventListener(`keydown`, pressed_something);

function pressed_something() {
    
    if(event.key === `a`) {
         document.body[`outerHTML`] = `<h1> You've pressed the "a" key</h1>`;
    } else if (event.key === ` `) {
        document.body[`outerHTML`] = `<h1> You've pressed the "space bar" key</h1>`
    } else if (event.key === `b`) {
        document.body[`outerHTML`] = `<h1> You've pressed the "b" key</h1>`;
   } else if (event.key === `c`) {
    document.body[`outerHTML`] = `<h1> You've pressed the "c" key</h1>`;
}
    
   
}