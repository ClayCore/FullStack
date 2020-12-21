export const $ = (what: string): Element | null => {
    return document.querySelector(what);
};
