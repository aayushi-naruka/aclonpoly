import Navbar from "../Navbar/Navbar"
import '../NavbarOther/NavbarOther.css'
import ACLONlogo from '../../assets/company/ACLONlogo.png'
import { NavLink } from "react-router-dom"


const NavbarOther = () => {


    return (<>
        <Navbar></Navbar>
        <div className='navbar-menu-container-other'>
            <div>
                <img className="footer-logo" src={ACLONlogo} alt="ACLON logo" />
            </div>
            <div>
                <ul className='nav-items'>
                    <NavLink to='/aclonpoly/' className='each-nav-item'>HOME</NavLink>
                    <NavLink to='/aclonpoly/about' className='each-nav-item'>ABOUT US</NavLink>
                    <NavLink to='/aclonpoly/products' className='each-nav-item'>PRODUCTS</NavLink>
                    <NavLink to='/aclonpoly/laboratory&manufacturing' className='each-nav-item'>MANUFACTURING</NavLink>
                    <NavLink to='/aclonpoly/whyus' className='each-nav-item'>WHY US</NavLink>

                </ul>
            </div>
            <div className="send-enquiry-box">
                <NavLink to='/aclonpoly/contact' className='send-enquiry-header'>
                    CONTACT
                </NavLink>
            </div>
        </div>
    </>
    )
}

export default NavbarOther