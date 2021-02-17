import * as React from "react";
import ReactDOM from "react-dom";

class ContainerIdDetector extends React.Component {
    constructor() {
        super();
        this.state = { dispatch: () => void 0 };
    }

    componentDidMount() {
        const currentNode = ReactDOM.findDOMNode(this);
        const host = currentNode.getRootNode().host;
        const dispatch = host.dispatch;

        this.setState({
            dispatch
        })
    }

    render() {
        return React.cloneElement(
            React.Children.only(this.props.children),
            {dispatch: this.state.dispatch}
        );
    }
}

export function attachDispatch() {
    return (Component) => (props) =>
        <ContainerIdDetector>
            <Component {...props} />
        </ContainerIdDetector>
}