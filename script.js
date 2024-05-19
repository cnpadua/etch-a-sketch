function deleteGrid(){
    // Delete Grid element
    let grid = document.querySelector(".etch-a-sketch");
    grid.remove();
}

function addGridEventListeners(pixel){
   
    let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    let rainbow_mode = document.querySelector(".rainbow-mode");
    let opacity_mode = document.querySelector(".opacity-mode");
    
    // opacity
    if (opacity_mode.checked){
        pixel.style.opacity = .1;
        pixel.addEventListener("mouseover", ()=> {
            let old_opacity = Number(pixel.style.opacity);
            pixel.style.opacity = old_opacity + .1;  
        });
    }

    // rainbow
    if (rainbow_mode.checked){
        pixel.addEventListener("mouseover", ()=>{
            pixel.style.backgroundColor = `${colors[Math.floor(Math.random() * 6)]}`;
        });
    } else {
        // default - black bg color
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "black";
        });
    }

   
}

function createNGridElement(n){
    /*
    Return div containing nested div
    X 1: Create CONTAINER div that will hold nested divs
    X 2: Nested for loop
        Outer loop = rows
        Inner loop = columns
    X 3: Outer loop
        a: Create new ROW-div[i]
            i: Add attributes:
                display: flex
        b: Insert into CONTAINER
    4: Inner loop
        a: Create new COL-div[j] (pixel)
            i: Add event listeners **
                When mouse hover -> BG color=black
            ii: Add attributes
                display: flex
        b: Insert COL-div[j] into ROW-div[i]
    5: Return CONTAINER
    */
    console.log("= createNGridElement =");

    

    let etch_a_sketch = document.createElement("div");
    etch_a_sketch.setAttribute("class", "etch-a-sketch");
    
    for (let i=0; i<n; i++){
        // ROW ELEMENT
        let row_div = document.createElement("div");
        row_div.setAttribute("class", "grid-row");
        
        // APPEND TO ETCH-A-SKETCH CONTAINER
        etch_a_sketch.appendChild(row_div);

        for (let j=0; j<n; j++){
            // COLUMN ELEMENT
            let col_div = document.createElement("div");
            col_div.setAttribute("class", "grid-col");

            // Hover event listener
            addGridEventListeners(col_div);

            // APPEND TO ROW ELEMENT
            row_div.appendChild(col_div);
        }
    }
    return etch_a_sketch;
}

function isValidSize(n){
    return n > 0 && n < 101;
}

function isEmpty() {
    let body_element = document.querySelector(".body");
    return body_element.innerHTML  != ""
}

function getGridSize(){
    let grid_size = document.querySelector(".number-input");
    return Number(grid_size.value);
}

function activateGridListener(element){
    // Change grey outline to red
    element.addEventListener("click", ()=> {
        let body = document.querySelector(".body");
        body.style.outline = "4px dashed red";
    }); 
}

function addGridCreateListener(element){
    element.addEventListener("click", () => {
        let body_element = document.querySelector(".body");

        // check if not empty
        if (isEmpty()) {
            deleteGrid();    
        }

        let number_input = getGridSize();

        // Check if number valid
        if (number_input > 100) {
            alert("Number must be in the range 1-100!");
        } else {
            let etch_a_sketch = createNGridElement(number_input);
            body_element.appendChild(etch_a_sketch);
        }
    });

    activateGridListener(element);
}



function main(){
    let button = document.querySelector(".grid-button");
    let rainbow = document.querySelector(".rainbow-mode");
    let opacity = document.querySelector(".opacity-mode");

    addGridCreateListener(button);
    addGridCreateListener(rainbow);
    addGridCreateListener(opacity);
}

main();