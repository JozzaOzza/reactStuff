import { useState } from "react";
import DisplayComp from "./DisplayComp";
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
            <DisplayComp username={username} password={password} />
        </>
    );
}

export default LoginManager;