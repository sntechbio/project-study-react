import React, { useState } from "react";
import Greeting from "../Greeting/Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleLoginClick() {
        setIsLoggedIn(true);
    }

    function handleLogoutClick() {
        setIsLoggedIn(false);
    }

    let button;

    if(isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />
    } else {
        button = <LoginButton onClick={handleLoginClick} />
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
            <br/>
            The user is <b>{isLoggedIn ? 'Currently' : 'not'}</b> logged in.
        </div>
    )

}

export default LoginControl;