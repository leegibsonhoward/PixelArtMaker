import { addColor, resetGrid, createGrid, waitForSubmit } from '../index';

describe('PixelArtMaker Functions =>', () => {
    test('restGrid(): should remove all childnodes from table element', () => {
        // Create table element and append to document.body
        const newTable = 'table';
        const tableElement = document.createElement(newTable);
        document.body.appendChild(tableElement);
        // Create tbody element and append to table element
        const table = document.querySelector('table');
        const tableBody = document.createElement('tbody');
        table.appendChild(tableBody);

        // Remove all childNodes from table element
        resetGrid();

        // Should return null
        expect(table.firstChild).toEqual(null);
    });
    test('addColor(): Change background color of td cell on click', () => {
        document.body.innerHTML = `<input type="color"id="colorPicker" value="#3273c9">
                                    <table><tbody><tr><td></td></tr></tbody></table>`;
        const td = document.querySelector('td');
        addColor(td);
        td.click();
        expect(td.style.backgroundColor).toEqual('rgb(50, 115, 201)');
    });
});
