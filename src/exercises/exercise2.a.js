function colorSelect() {
    const appElement = document.querySelector(".ex2a");
    const selectElement = document.createElement("select");
    selectElement.classList = 'select-colors'
    selectElement.setAttribute("name", "select");

    ["Red", "Blue", "Green"].forEach((color) => {
        const optionColorElement = document.createElement("option");
        optionColorElement.setAttribute("value", color.toLowerCase());
        optionColorElement.textContent = color;
        selectElement.appendChild(optionColorElement);
    });

    appElement.appendChild(selectElement);
}

function createBox() {
    const boxElement = document.createElement("div");
    boxElement.classList = "box bg-red";
    const appElement = document.querySelector(".ex2a");
    appElement.appendChild(boxElement);
}

function changeColor() {
    const selectElement = document.querySelector("select");
    selectElement.addEventListener("change", (event) => {
        const boxElement = document.querySelector(".box");
        const colorValue = event.target.value;
        boxElement.classList = `box bg-${colorValue}`;
    });
}

export function main2_a() {
    colorSelect();
    createBox();
    changeColor();
}