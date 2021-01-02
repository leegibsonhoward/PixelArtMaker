import { getElement, getSelector, createElement } from '../helpers';

describe('Helpers Functions =>', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.firstChild.remove();
        }
    });

    test('getElement(): returns correct id', () => {
        document.body.innerHTML = `<h1 id="test-id"></h1>`;
        expect(getElement('test-id').id).toBe('test-id');
    });

    test('getSelector(): returns correct selector', () => {
        document.body.innerHTML = `<div></div>`;
        expect(getSelector('div').nodeName).toBe('DIV');
    });

    test('createElement(): creates a new element', () => {
        document.body.innerHTML = `<p></p>`;
        expect(createElement('p').tagName).toBe('P');
    });
});
