import './main.scss';

import { getElement, getSelector, createElement } from './helpers';

// PixelArtMaker Functions

const addColor = (tableData): void => {
    const colorPicker = getElement('colorPicker') as HTMLInputElement;
    // Add color to clicked on cell in grid
    tableData.addEventListener('click', (event: Event) => {
        event.preventDefault();
        tableData.style.backgroundColor = colorPicker.value;
    });
};

const resetGrid = (): void => {
    const table = getSelector('table');
    // Reset table by removing all child elements
    while (table.firstChild) {
        table.firstChild.remove();
    }
};

const createGrid = (): void => {
    const inputHeight = getElement('inputHeight') as HTMLInputElement;
    const inputWidth = getElement('inputWidth') as HTMLInputElement;
    const table = getSelector('table');

    // Create tbody and add as child to table
    const newTbody = createElement('tbody');
    table.appendChild(newTbody);

    // Assign created tbody element to variable for reuse
    const tbody = getSelector('tbody');

    // Create grid rows
    for (let i = 1; i <= Number(inputHeight.value); i++) {
        const newTr = createElement('tr');
        tbody.appendChild(newTr);

        // Create grid columns
        for (let j = 1; j <= Number(inputWidth.value); ++j) {
            const newTd = createElement('td');
            newTr.appendChild(newTd);

            addColor(newTd);
        }
    }
};

const main = (): void => {
    resetGrid();
    createGrid();
};

const waitForSubmit = (): void => {
    // Wait for submit button before creating grid
    document.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        main();
    });
};

waitForSubmit();
