const containerSqDiv = document.querySelector("#sqDivs");

makeRows(16,16);



function makeRows(rows,cols) {
    containerSqDiv.style.setProperty('--grid-rows', rows);
    containerSqDiv.style.setProperty('--grid-cols',cols);

    for (c = 0; c < (rows * cols); c++ ){
        let cell = document.createElement("div");
        containerSqDiv.appendChild(cell).className="grid-item";
        cell.addEventListener('mouseenter', (e) => {
            cell.style.background= "black";
        })
        
    };
};