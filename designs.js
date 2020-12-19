// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Assign main elements to variables for reuse
    const inputHeight = document.getElementById('inputHeight');
    const inputWidth = document.getElementById('inputWidth');
    const colorPicker = document.getElementById('colorPicker');
    const table = document.querySelector('table');

    // Reset table by removing all child elements
    while (table.firstChild) {
        table.firstChild.remove()
    }

    // Create tbody and add as child to table
    const newTbody = document.createElement('tbody');
    table.appendChild(newTbody);

    // Extract input height and width values for use with grid
    let gridHeight = inputHeight.value;
    let gridWidth = inputWidth.value

    // Assign created tbody element to variable for reuse
    const tbody = document.querySelector('tbody');
    
    // Create grid rows
    for (i = 0; i <= gridHeight; i++) {
        let newTr = document.createElement('tr');
        tbody.appendChild(newTr);
        
        // Create grid columns
        for (j = 0; j <= gridWidth; ++j) {
            let newTd = document.createElement('td');
            newTr.appendChild(newTd);

            // Add color to clicked on cell in grid
            newTd.addEventListener("click", function(event){
                event.preventDefault()
                newTd.style.backgroundColor = colorPicker.value;
            });
        }
    }
}

// Wait for submit button before creating grid
document.addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid();
});
