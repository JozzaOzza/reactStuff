import ContactCard from "./ContactCardComp";
import ContactCardManager from "./ContactCardManagerComp";

const Manager = () => {
    
    let cardArray = [
        {
            name: "Daisy",
            email: "daisy1@sleepsAllDay.com",
            age: 9,
            isCute: true,
            favFood: ["grass", "my tail"],
            image: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg"
        },
        {
            name: "Flossy",
            email: "flossy234@meow.com",
            age: 9,
            isCute: true,
            favFood: ["treats", "more treats"],
            image: "https://www.thesprucepets.com/thmb/9oFMwEfwmmp6us5uIZ1Nfz8z_70=/2121x1193/smart/filters:no_upscale()/GettyImages-1144157924-52f5bd679db74abfb01615715e68e63c.jpg"
        }
    ]
    
    return ( 
        <>
        
        <ContactCardManager data={cardArray}></ContactCardManager>
        
        </>
    
     );
}
 
export default Manager;