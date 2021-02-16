import * as React from "react";
import ReactDOM from "react-dom";

class ContainerIdDetector extends React.Component {
    constructor() {
        super();
        this.state = { containerId: "" };
    }

    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this))
    }

    render() {
        if (!this.state.containerId) {
            return <span />;
        } else {
            return React.cloneElement(
                React.Children.only(this.props.children),
                {}
            );
        }
    }
}

ContainerIdDetector.propTypes = {
    property: React.PropTypes.string.isRequired
}
export function getParentNode(property = "containerId") {
    return (Component) => (props) =>
        <ContainerIdDetector property={property}>
            <Component {...props} />
        </ContainerIdDetector>
}