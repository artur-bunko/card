export function dispatch (type, detail) {
    console.log("Dispatch", {type, detail})
    const event = new CustomEvent(type, {
        composed: true,
        bubbles: true,
        detail: Object.assign({type}, {payload: detail})
    });

    document.querySelector("x-277411-test-react").dispatchEvent(event);
}