import React, {useState} from "react";

//////////// Class Component//////////////////////
/*class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = { age: props.age }
    }
    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div className="PersonCard">
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.newAge}>
                    Birthday Button for {firstName} {lastName}!
                </button>
            </div>
        )
    }
    newAge = () => this.setState({ age: this.state.age + 1 });
}*/

///////////////Componente Funcional//////////////////
const PersonCard = props => {
    const [state, setState] = useState({
        age: props.age
    })
    const newAge = e => {
        console.log(state)
        setState({ age: state.age + 1 })
    };
    return (
        <div className="PersonCard">
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {state.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={newAge}>
                Birthday Button for {props.firstName} {props.lastName}!
            </button>
        </div>
    );

}

export default PersonCard;