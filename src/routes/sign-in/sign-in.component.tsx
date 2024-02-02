import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils.ts";
import SignUpForm from "../../components/sign-up/sign-up-form.component.tsx";

const SignIn = () => {

    const logGoogleUser = async (): Promise<void> => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

        console.log(userDocRef)
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;