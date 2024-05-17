
function getGridSize(){
    /*
    Returns users input:Number
    
    if n<=100:
        return input
    else:
        return -1

    */
}

function deleteGrid(){
    // Delete Grid element
    let grid = document.querySelector(".etch-a-sketch");
    grid.remove();
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

    let temp_colors = ["red", "orange", "yellow", "green", "blue", "purple"];

    let etch_a_sketch = document.createElement("div");
    etch_a_sketch.setAttribute("class", "etch-a-sketch");
    
    for (let i=0; i<n; i++){
        // ROW ELEMENT
        let row_div = document.createElement("div");
        row_div.setAttribute("class", "grid-row");

        // test colors
        // row_div.setAttribute("style", `background:  ${temp_colors[i%6]};`);
        
        // APPEND TO ETCH-A-SKETCH CONTAINER
        etch_a_sketch.appendChild(row_div);

        for (let j=0; j<n; j++){
            // COLUMN ELEMENT
            let col_div = document.createElement("div");
            col_div.setAttribute("class", "grid-col");

            // Hover event listener
            col_div.addEventListener("mouseover", () => {
                col_div.style.cssText = "background-color: black;";
            } )

            // APPEND TO ROW ELEMENT
            row_div.appendChild(col_div);
        }
    }
    return etch_a_sketch;
}


function main(){
    let button = document.querySelector(".grid-button");
    let grid_size = document.querySelector(".number-input");

    // Event listener for grid creation
    button.addEventListener("click", () => {
        let body_element = document.querySelector(".body");

        // check if not empty
        if (body_element.innerHTML  != "") {
            deleteGrid();    
        }

        let number_input = Number(grid_size.value);
        let etch_a_sketch = createNGridElement(number_input);
        body_element.appendChild(etch_a_sketch);
    });
}

main();