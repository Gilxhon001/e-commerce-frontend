import SignUpForm from "../../components/sign-up/sign-up-form.component.tsx";
import SignInForm from "../../components/sign-in/sign-in-form.component.tsx";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
