/// <reference types="vite-plugin-svgr/client" />
import {Link, Outlet} from "react-router-dom";

import CrwnLogo from "../../assets/crown.svg?react";

import './navigation.styles.scss'
import {UserContext} from "../../context/user.context.tsx";
import {useContext} from "react";
import {signOutUser} from '../../utils/firebase/firebase.utils';


const Navigation = () => {
    const {currentUser} = useContext(UserContext);

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                    )}
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Navigation;