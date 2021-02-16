function getParentNode () {

}

export function dispatch (type, detail) {
    console.log("Dispatch", {type, detail})

    const event = new CustomEvent(type, {
        composed: true,
        bubbles: true,
        detail: Object.assign({type}, {payload: detail, event: {type}})
    });

    const {target} = event;
    if ("dispatch" in target) {
        return target.dispatch(type, detail);
    }

    target.dispatchEvent(event);
}