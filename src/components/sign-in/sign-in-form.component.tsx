import React, {useState} from "react";
import FormInput from "../form-input/form-input.component.tsx";

import "./sign-in-form.styles.scss"
import Button from "../button/button.component.tsx";
import {SignIn} from "../../types/interfaces.ts";
import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils.ts";

const defaultFormFields: SignIn = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const {email, password} = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async (): Promise<void> => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

        console.log(userDocRef)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);

            console.log(response)
            resetFormFields();
        } catch (error: unknown) {
            if (typeof error === "object" && error !== null && "code" in error) {
                const typedError = error as { code: string };
                switch (typedError.code) {
                    case "auth/invalid-credential":
                        alert("Invalid email or password");
                        break
                    default:
                        console.log(error)
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
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password"
                           value={password}/>

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;