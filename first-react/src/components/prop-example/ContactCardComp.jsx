const ContactCard = (props) => {
    
    const {name, email, age, isCute, favFood, image} = props
    
    return ( 

        <div>
        <h4>My name is {name}</h4>
        <h4>My email address is {email}</h4>
        <h4>I am {age.toString()} years old</h4>
        <h4>I am cute: {isCute.toString()}</h4>
        <h4>My favourite food(s): </h4>
        <h5> 
            <ul>
                {favFood.map((food, key) => {
                    return <li> {food} </li>
                })}
            </ul>
        </h5> 
        <img src={image.toString()} alt={name} width="100" height="100"/>
        </div>

     );
}
 
export default ContactCard;