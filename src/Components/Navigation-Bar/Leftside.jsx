import React from "react";
import logo from '../../Assets/Logo/logo.jpeg';

function Leftside() {
    return(
        <>
            <div id="leftside">
                <img src={logo} alt="" id="logo"/>
                <div id="hello">
                    <h1>CINEMATIC <br></br> PRODUCTION</h1>
                </div>
            </div>
        </>
    );
}

export default Leftside