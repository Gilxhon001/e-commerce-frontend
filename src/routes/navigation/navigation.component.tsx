/// <reference types="vite-plugin-svgr/client" />
import {Link, Outlet} from "react-router-dom";

import CrwnLogo from "../../assets/crown.svg?react";

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    <Link className="nav-link" to="/signIn">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Navigation;