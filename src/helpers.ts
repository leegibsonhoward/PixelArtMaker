// Helper Functions

export const getElement = (id: string): HTMLElement => {
    return document.getElementById(id);
};

export const getSelector = (selector: string): HTMLElement => {
    return document.querySelector(selector);
};

export const createElement = (tag: string): HTMLElement => {
    return document.createElement(tag);
};
