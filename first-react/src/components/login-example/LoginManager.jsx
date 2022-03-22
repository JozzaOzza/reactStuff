import { useState } from "react";
import FormComp from "./FormComp";

const LoginManager = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    
    
    const makeVisible = () => {
        document.getElementById("usernameHeader").style.visibility = "visible"
        document.getElementById("passwordHeader").style.visibility = "visible"
    }

    const makeInvisible = () => {
        document.getElementById("usernameHeader").style.visibility = "hidden"
        document.getElementById("passwordHeader").style.visibility = "hidden"
    }

    return (
        <>
            <FormComp setUsername={setUsername} setPassword={setPassword}></FormComp>
            <h2> <div id="usernameHeader" style={{visibility: "hidden"}}> Your username is: <div id="usernameDiv"> {username} </div></div></h2>
            <h2> <div id="passwordHeader" style={{visibility: "hidden"}}> Your password is: <div id="passwordDiv"> {password} </div></div></h2>
        </>
    );
}

export default LoginManager;