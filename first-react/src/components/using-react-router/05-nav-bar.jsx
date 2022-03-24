import { Link } from 'react-router-dom'

const NavBar = () => {
    return (

        <>

            <nav>
                <span>
                    <Link to="/"> Home </Link>
                </span>
                <span>
                    <Link to="/shop"> Shop </Link>
                </span>
                <span>
                    <Link to="/contact"> Contact Us </Link>
                </span>
                <span>
                    <Link to="/profile"> My Profile </Link>
                </span>
            </nav>

        </>

    );
}

export default NavBar;