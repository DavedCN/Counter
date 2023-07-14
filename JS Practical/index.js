num = 0;

let increment = document.getElementById("increment-btn");

let count = document.getElementById("counter");

increment.addEventListener("click", incrementclick);


function incrementclick()
{
    num += 1;
    count.innerHTML = num;
}

let reset = document.getElementById("reset-btn");
reset.addEventListener("click", resetclick);

function resetclick()
{
    num = 0;
    count.innerHTML = num;  
}


let decrement = document.getElementById("decrement-btn");
decrement.addEventListener("click", decrementclick);

function decrementclick()
{
   num -= 1;
   count.innerHTML = num;
}


let save = document.getElementById("save-btn");
save.addEventListener("click", saveclick);
let saveEl = document.getElementById("save-el");

function saveclick()
{

    let numstri =  num + " - ";

   saveEl.innerHTML += numstri;
    

   num = 0;
   count.innerHTML = 0;
}




