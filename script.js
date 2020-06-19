const containerSqDiv = document.querySelector("#sqDivs");
const resetButton = document.querySelector("#resetBut");

makeRows(16,16);


function makeRows(rows,cols) {
    containerSqDiv.style.setProperty('--grid-rows', rows);
    containerSqDiv.style.setProperty('--grid-cols',cols);

    for (c = 0; c < (rows * cols); c++ ){
        let cell = document.createElement("div");
        containerSqDiv.appendChild(cell).className="grid-item";
        cell.addEventListener('mouseenter', (e) => {
            cell.style.background= "#b5cdbe";
        })   
    }
}

function reset() {
    let cols, rows;
    containerSqDiv.innerHTML = '';
    rows = window.prompt("Enter rows");
    cols = window.prompt("Enter cols");
    if (rows !== null || cols !== null)
    makeRows(rows,cols);
    else
        makeRows(16,16);
}

resetButton.addEventListener("click",reset);
