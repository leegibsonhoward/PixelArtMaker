import { getElement, getSelector, createElement } from '../helpers';

describe('Helpers Functions =>', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.firstChild.remove();
        }
    });

    test('getElement(): returns correct id', () => {
        const elementID = 'test-id';
        const newElement = document.createElement('h1');
        newElement.setAttribute('id', elementID);
        document.body.appendChild(newElement);
        expect(getElement(elementID).id).toBe('test-id');
    });

    test('getSelector(): returns correct selector', () => {
        const newElement = 'div';
        const element = document.createElement(newElement);
        document.body.appendChild(element);
        expect(getSelector(newElement).nodeName).toBe('DIV');
    });

    test('createElement(): creates a new element', () => {
        const newElement = 'p';
        const element = document.createElement(newElement);
        document.body.appendChild(element);
        expect(createElement(newElement).tagName).toBe('P');
    });
});
