export function dispatch (type, detail) {
    const event = new CustomEvent(type, {
        composed: true,
        bubbles: true,
        detail: Object.assign({type}, {payload: detail})
    });

    document.dispatchEvent(event);
}