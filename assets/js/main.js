//Milestone 1
const Box= document.getElementById('box')
const containerElement = document.getElementById('main_container')
let i;
let objectBox;

for (i = 1; i <= 100; i++) {
    // display FizzBuzz in the console if the number is a multiple of 3 and 5
    if ( ( i % 3 == 0) && ( i % 5 == 0) ){
        
        console.log("FizzBuzz")
        objectBox = "FizzBuzz"
        markupObject = `
        <div id="box" class=" p-2 d-flex square bg_red m-2 fw-bold rounded-pill ">
        ${objectBox}
        </div>`
        containerElement.insertAdjacentHTML ('beforeend' , markupObject )
        // display Fizz in the console if the number is a multiple of 3 
    } else if (i % 3 == 0){
        
        console.log("Fizz")
        objectBox = "Fizz"
        markupObject = `
        <div id="box" class=" p-2 d-flex square bg_green m-2 fw-bold rounded-pill">
        ${objectBox}
        </div>`
        containerElement.insertAdjacentHTML ('beforeend' , markupObject )
        
        // display Buzz in the console if the number is a multiple of 5
    } else if ( i % 5 == 0){
        
        console.log("Buzz")
        objectBox = "Buzz"
        markupObject = `
        <div id="box" class=" p-2 d-flex square bg_yellow m-2 fw-bold rounded-pill">
        ${objectBox}
        </div>`
        containerElement.insertAdjacentHTML ('beforeend' , markupObject )
    } else{

        console.log(i)
        objectBox = i
        markupObject = `
        <div id="box" class=" p-2 d-flex square bg_blue m-2 fw-bold fs-5 rounded-pill">
        ${objectBox}
        </div>`
        containerElement.insertAdjacentHTML ('beforeend' , markupObject )
    }
    //Display on page
}