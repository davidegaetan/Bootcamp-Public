import React, { useState } from "react";
import FormData from "./formData";

const UserInput = (props) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const newUser = {
        fName,
        lName,
        email,
        password,
        confirmPassword
    }

    console.log(newUser);

    return (
        <div className="container">
            <div className="form-section">
                <label> First Name: </label>
                <input type="text" onChange={(e) => setFName(e.target.value)} value={fName} />
            </div>
            {
                fName && fName.length < 2 ?
                    <p style={{color: "red"}} >First Name must be at least 2 characters long</p> :
                    <p></p>
            }
            <div className="form-section">
                <label> Last Name: </label>
                <input type="text" onChange={(e) => setLName(e.target.value)} value={lName} />
            </div>
            {
                lName && lName.length < 2 ?
                    <p style={{color: "red"}} >Last Name must be at least 2 characters long</p> :
                    <p></p>
            }
            <div className="form-section">
                <label> Email: </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            {
                email && email.length < 5 ?
                    <p style={{color: "red"}} >Email must be at least 5 characters long</p> :
                    <p></p>
            }
            <div className="form-section">
                <label> Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <p></p>
            <div className="form-section">
                <label> Confirm Password: </label>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
            </div>
            {
                password && confirmPassword && password !== confirmPassword ?
                    <p style={{color: "red"}} >Passwords must match</p> :
                    <p></p>
            }
            <FormData fName={newUser.fName} email={newUser.email} lName={newUser.lName} password={newUser.password} confirmPassword={newUser.confirmPassword} />
        </div>

    );

}

export default UserInput;