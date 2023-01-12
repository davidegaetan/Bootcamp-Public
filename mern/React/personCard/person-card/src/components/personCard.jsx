import React, { Component } from "react";

class PersonCard extends Component {
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
}

export default PersonCard;