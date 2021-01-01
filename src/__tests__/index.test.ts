import { addColor, resetGrid, createGrid, main, waitForSubmit } from '../index';

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
});
