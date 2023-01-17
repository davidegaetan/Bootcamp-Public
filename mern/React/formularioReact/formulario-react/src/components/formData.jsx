import React, {useState} from "react";

const FormData = (props) => {

    const dontShowPassword = (pw) =>  pw ? "password" : "";

    return(
        <div>
            <p>Your Form Data</p>
            <p>First Name:  {props.fName}</p>
            <p>Last Name:   {props.lName}</p>
            <p>Email:   {props.email}</p>
            <p>Password:   {dontShowPassword(props.password)}</p>
            <p>Confirm Password:   {dontShowPassword(props.confirmPassword)}</p>
        </div>
    );
}

export default FormData;