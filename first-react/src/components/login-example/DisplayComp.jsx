const DisplayComp = ({username, password}) => {
    return ( 
        
        <>
            <h2> <div id="usernameHeader" style={{visibility: "hidden"}}> Your username is: <div id="usernameDiv"> {username} </div></div></h2>
            <h2> <div id="passwordHeader" style={{visibility: "hidden"}}> Your password is: <div id="passwordDiv"> {password} </div></div></h2>        
        </>
     );
}
 
export default DisplayComp;