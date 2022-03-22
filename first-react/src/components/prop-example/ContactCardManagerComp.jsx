import ContactCard from "./ContactCardComp";

const ContactCardManager = ( { data } ) => {
    return ( 

        <>
        {data.map((card, key) => {
            return(
                <>
                    <ContactCard name={card.name} email={card.email} age={card.age} isCute={card.isCute} favFood={card.favFood} image={card.image}/>
                </>
            );
        })}
        </>

     );
}
 
export default ContactCardManager;