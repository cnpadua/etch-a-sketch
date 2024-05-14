
function getGridSize(){
    ```
    Returns users input:Number
    
    if n<=100:
        return input
    else:
        return -1

    ```
}

function deleteGrid(){
    // Delete Grid element
}

function createNGridElement(n){
    ```
    Return div containing nested div
    1: Create CONTAINER div that will hold nested divs
    2: Nested for loop
        Outer loop = rows
        Inner loop = columns
    3: Outer loop
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
    ```
}

function main(){

}

main();