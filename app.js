// code to target id dog_page, which is the img waiting on user to hover mouse over it.  when it does it calls the move_right function
document.querySelector(`#dog_page`).addEventListener(`mouseover`, move_right);
// makes the img move 500px to the right 
function move_right() {
    document.querySelector(`#dog_page`)[`style`][`transform`] = "translate(500px,0)";
}

// 
