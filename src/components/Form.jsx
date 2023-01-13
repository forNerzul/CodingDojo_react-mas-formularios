import React from "react";
import "./styles.css";

const Form = (props) => {
    const { inputs, setInputs } = props;

    const firstNameMessage = () => {
        if (inputs.firstName.length < 2 && inputs.firstName.length > 0) {
            return (
                <p className="error">
                    First name must be at least 2 characters
                </p>
            );
        }
    };

    const lastNameMessage = () => {
        if (inputs.lastName.length < 2 && inputs.lastName.length > 0) {
            return (
                <p className="error">Last name must be at least 2 characters</p>
            );
        }
    };

    const passwordLengthMessage = () => {
        if (inputs.password.length < 8 && inputs.password.length > 0) {
            return (
                <p className="error">Password must be at least 8 characters</p>
            );
        }
    };

    const passwordNotMatchMessage = () => {
        if (
            inputs.password !== inputs.confirmPassword &&
            inputs.confirmPassword.length > 0
        ) {
            return <p className="error">Passwords must match</p>;
        }
    };

    const emailMessage = () => {
        if (inputs.email.length < 5 && inputs.email.length > 0) {
            return <p className="error">Email must be at least 5 characters</p>;
        }
    };

    const onChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <form className="formulario">
                <fieldset className="campo">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name="firstName" onChange={onChange} />
                    {firstNameMessage()}
                </fieldset>
                <fieldset className="campo">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" name="lastName" onChange={onChange} />
                    {lastNameMessage()}
                </fieldset>
                <fieldset className="campo">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={onChange} />
                    {emailMessage()}
                </fieldset>
                <fieldset className="campo">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={onChange}
                    />
                    {passwordLengthMessage()}
                    {passwordNotMatchMessage()}
                </fieldset>
                <fieldset className="campo">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={onChange}
                    />
                </fieldset>
            </form>
        </>
    );
};

export default Form;
