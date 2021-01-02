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

    test('createGrid(): use values to create 16x16 grid', () => {
        document.body.innerHTML = `<h1>Pixel Art Maker</h1>

        <h2>Choose Grid Size</h2>
        <form id="sizePicker">
            Grid Height:
            <input type="number" id="inputHeight" name="height" min="1" value="16">
            Grid Width:
            <input type="number" id="inputWidth" name="width" min="1" value="16">
            <input id="btn" type="submit">
        </form>
    
        <h2>Pick A Color</h2>
        <input type="color" id="colorPicker">
    
        <h2>Design Canvas</h2>
        <table id="pixelCanvas"></table>`;

        createGrid();

        const allTr = document.querySelectorAll('tr');
        const allTd = document.querySelectorAll('td');

        expect(allTr.length).toEqual(16);
        expect(allTd.length).toEqual(256);
    });

    test('waitForSubmit(): reset and create grid with default grid size 16x16 ', () => {
        document.body.innerHTML = `<h1>Pixel Art Maker</h1>

        <h2>Choose Grid Size</h2>
        <form id="sizePicker">
            Grid Height:
            <input type="number" id="inputHeight" name="height" min="1" value="16">
            Grid Width:
            <input type="number" id="inputWidth" name="width" min="1" value="16">
            <input id="btn" type="submit">
        </form>
    
        <h2>Pick A Color</h2>
        <input type="color" id="colorPicker">
    
        <h2>Design Canvas</h2>
        <table id="pixelCanvas"></table>`;
        const query = document.querySelector('input[type=submit]') as HTMLInputElement;
        waitForSubmit();
        query.click();
        const allTr = document.querySelectorAll('tr');
        const allTd = document.querySelectorAll('td');

        expect(allTr.length).toEqual(16);
        expect(allTd.length).toEqual(256);
    });
});
