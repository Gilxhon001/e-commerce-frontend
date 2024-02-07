import {SignUp} from "../../types/interfaces.ts";
import React, {useContext, useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils.ts";
import FormInput from "../form-input/form-input.component.tsx";

import "./sign-up-form.styles.scss"
import Button from "../button/button.component.tsx";
import {UserContext} from "../../context/user.context.tsx";

const defaultFormFields: SignUp = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const {displayName, email, password, confirmPassword} = formFields;

    const {setCurrentUser} = useContext(UserContext);
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return;
        }

        try {
            const result = await createAuthUserWithEmailAndPassword(email, password);
            if (!result) {
                console.error("User creation failed due to missing email or password");
                return;
            }
            const {user} = result;
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
            setCurrentUser(user);
        } catch (error: unknown) {
            if (typeof error === "object" && error !== null && "code" in error) {
                const typedError = error as { code: string };
                if (typedError.code === "auth/email-already-in-use") {
                    alert("Cannot create user, email already in use");
                }
            }
        }

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName"
                           value={displayName}/>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password"
                           value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={handleChange}
                           name="confirmPassword" value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;