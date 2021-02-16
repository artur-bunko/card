import ReactDOM from "react-dom";
export function getParentNode(node = null) {
    return ReactDOM.findDOMNode(node)
}