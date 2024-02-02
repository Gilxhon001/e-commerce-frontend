import {SignUp} from "../../types/interfaces.ts";
import React, {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils.ts";

const defaultFormFields: SignUp = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword} = formFields

    const resetFormFields = () => {
      setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()

        if (password !== confirmPassword){
            alert("Passwords do not match")
            return;
        }

        try {
            const result = await createAuthUserWithEmailAndPassword(email, password);
            if (!result) {
                console.error("User creation failed due to missing email or password");
                return;
            }
            const { user } = result;
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (e) {
            console.log(e);
        }

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

  return (
      <div>
          <h1>Sign up with your email and password</h1>
          <form onSubmit={handleSubmit}>
              <label>Display Name</label>
              <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

              <label>Email</label>
              <input type="email" required onChange={handleChange} name="email" value={email}/>

              <label>Password</label>
              <input type="password" required onChange={handleChange} name="password" value={password}/>

              <label>Confirm Password</label>
              <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

              <button type="submit">Sign Up</button>
          </form>
      </div>
  )
}

export default SignUpForm;