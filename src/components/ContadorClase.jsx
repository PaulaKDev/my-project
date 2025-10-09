import React , {Component} from "react";

class ContadorClase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementar = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    };
    decrementar = () => {
        this.setState((prevState) => ({count: prevState.count - 1}));
    };

    render( ) {

        const {count} = this.state;
        const {texto} = this.props;

        return (
            <div>
                <h1>{texto}</h1>
                <p>Clicks:{count}</p>
                <button onClick={this.incrementar}>Sumar Click</button>
                <button onClick={this.decrementar}>Restar Click</button>
            </div>
        );
    }
}
export default ContadorClase;
