import React, {ReactNode} from "react";
import "./button.styles.scss"

interface ButtonProps {
    children: ReactNode;
    type: "submit" | "reset" | "button";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    buttonType?: keyof typeof BUTTON_TYPE_CLASSES;
}

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}

const Button: React.FC<ButtonProps> = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''}`}
                {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;