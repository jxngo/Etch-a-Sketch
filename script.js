const containerSqDiv = document.querySelector("#sqDivs");
const resetButton = document.querySelector("#resetBut");

makeRows(16);


function makeRows(numCell) {
    containerSqDiv.style.setProperty('--grid-rows', numCell);
    containerSqDiv.style.setProperty('--grid-cols',numCell);

    for (c = 0; c < (numCell*numCell); c++ ){
        let cell = document.createElement("div");
        containerSqDiv.appendChild(cell).className="grid-item";
        cell.addEventListener('mouseenter', (e) => {
            cell.style.background= "#b5cdbe";
        })   
    }
}

function reset() {
    let cell;
    containerSqDiv.innerHTML = '';
    cell = window.prompt("Enter number of cells");
    if (cell !== null)
    makeRows(cell);
    else
        makeRows(16);
}

resetButton.addEventListener("click",reset);
