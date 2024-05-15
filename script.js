
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
        row_div.setAttribute("style", `background:  ${temp_colors[i%6]};`);
        
        // APPEND TO ETCH-A-SKETCH CONTAINER
        etch_a_sketch.appendChild(row_div);

        // row_div.textContent = "OUTER";

        for (let j=0; j<n; j++){
            // COLUMN ELEMENT
            let col_div = document.createElement("div");
            col_div.setAttribute("class", "grid-col");

            // APPEND TO ROW ELEMENT
            row_div.appendChild(col_div);

            col_div.textContent = "inner";
        }
    }
    return etch_a_sketch;
}

function main(){
    let button = document.querySelector(".grid-button");
    button.addEventListener("click", () => {
        console.log("= BUTTON PRESSED =");
        
        let body_element = document.querySelector(".body");
        let etch_a_sketch = createNGridElement(5);
        body_element.appendChild(etch_a_sketch);
    });
}

main();