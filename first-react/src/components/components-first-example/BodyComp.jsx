import Email from "./EmailComp";
import Message from "./MessageComp";
import Submit from "./SubmitComp";

const Body = () => {
    return (
        <div>
            <Email />
            <br></br>
            <Message />
            <br />
            <Submit />
        </div>
    );
}

export default Body;