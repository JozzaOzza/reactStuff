const FormComp = (setUsername, setPassword) => {
    
    let tempUser
    let tempPass

    const loginFunc = (nombre, pasa) => {
        setUsername(nombre)
        setPassword(pasa)
    }

    return (
        <>
            <h2>
                Enter a username and password, then click Submit to display them beneath
            </h2>
            <p>
                Write username here - <input type="text" id="usernameBox" name='name field'
                    placeholder='please enter username' onChange={(event) => tempUser = (event.target.value)} /> <br />
            </p>
            <p>
                Write password here - <input type="password" id="passwordBox" name='name field'
                    placeholder='please enter password' onChange={(event) => tempPass = (event.target.value)} /> <br />
            </p>
            <p>
                <input type="button" value="Display" onClick={() => loginFunc(tempUser, tempPass)} />
    
            </p>
        </>

    );
}

export default FormComp;