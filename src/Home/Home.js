import CarouselComponent from "../components/Carousel/Carousel"
import { NavLink } from "react-router-dom"
import './Home.css'
import aboutSectionPicture from '../assets/company/Group 12.png'
import manufacturingSectionPicture from '../assets/company/Group 11.png'
import laboratorySectionPicture from '../assets/company/Group 13.png'
import React,{useState} from 'react';
import IconButton from '@mui/material/IconButton';
import ACLONlogo from '../../src/assets/company/ACLONlogo.png'
import '../components/Navbar/Navbar'
import productData from "../../src/products.json"
import SearchIcon from '@mui/icons-material/Search';
import videoImage from '../../src/assets/company/IMG_2963.MP4'

const Home = () => {

    return (
        <>
          <div className = 'navbar-container'>
          <div className='navbar-menu-container'>
          <div>
          <img className="footer-logo" src={ACLONlogo} alt="ACLON logo"/>
          </div>
          {/* <Typography className='top-header'>

          </Typography> */}
          <div>
             <ul className='nav-items'>
                <NavLink to='/aclonpoly/'  className='each-nav-item'>HOME</NavLink>
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
          <div className='home'>
            <div className='home-description-container'>
              <div className='home-description-title'>
                ACLON blends to evolve next generation poly compounds for polymer industries
              </div>
              <div className='home-description'>
                Manufacturing of advanced Engineering Recycle & Reinforced Polymer compounds
              </div>
              <div className='searchbar'>
               <SearchBar></SearchBar>
              </div>
            </div>
            <div className='home-video-container'>
             <VideoPlayer></VideoPlayer>
            </div>
          </div>
        </div>
        <div className="about-section">
           <div className="about-section-description">
              <h3> ABOUT US</h3>
              <p>Its been more than a decades wherein we have been serving plastic manufacturing industry with various kinds of raw materials, primarily Polymer Compounds, as B2B Suppliers. In order to further diversify we have recently started our new venture and founded another company in the year 2022 called Aclon Poly Compounds Pvt. Ltd. wherein we are manufacturing the superior quality of thermoplastic engineering compounds to cater the specific requirements of Automobiles, Home Appliances and Lighting sector.</p>
              <div className="learn-more-wrapper"><NavLink to='/aclonpoly/about' className="learn-more">Learn More</NavLink></div>
           </div>
           <div className="about-section-image">
             <img className="home-images" src={aboutSectionPicture} alt="about-section-image"/>
           </div>
        </div>
        <div className="product-section">
           <div className="product-section-top-content">
            <h2>Our Products</h2>
            <p>Although we are having capacity and capability both in place to manufacture almost complete range of PVC granules, However in order to serve the Automobiles, Home Appliances and Electrical sector we are having further specialization in manufacturing of following PVC granules primarily:</p>
           </div>
           <div className="product-container">
             <CarouselComponent></CarouselComponent>
           </div>
           <div className="learn-more-wrapper-carousel"><NavLink to='/aclonpoly/products' className="learn-more">Learn More</NavLink></div>
        </div>
        <div className="about-section">
           <div className="about-section-description">
              <h3>Manufacturing</h3>
              <p>We are having state of the art manufacturing plant equipped with most advanced technology which includes twin screw extruders, mixers and the latest microprocessor injection molding machine which are handled and operated by plastic technologists and team of engineers who are very well versed with the entire production cycle and they can outperform at any given situation at any stage during the entire process mainly because of their prolonged experience and deep production knowledge.</p>
              <div className="learn-more-wrapper"><NavLink to='/aclonpoly/laboratory&manufacturing' className="learn-more">Learn More</NavLink></div>
           </div>
           <div className="about-section-image">
             <img className="home-images" src={manufacturingSectionPicture} alt="about-section-image"/>
           </div>
        </div>
            <div className="laboratory-section">
                <div className="about-section-image">
                    <img className="home-images" src={laboratorySectionPicture} alt="about-section-image" />
                </div>
                <div className="about-section-description">
                    <h3>The company is not only well equipped with all the latest and sophisticated testing machines as under:</h3>
                    <p>Conditioner Chamber, Universal Tensile Tester, Izod Impact Tester, Spectrophotometer, MFI Tester, Muffel Furnace
HDT / VSP Tester and Rockwell hardness Tester etc.
And to operate them we have well qualified and experienced staff to perform various quality checks on following parameters to check the over all quality of the respective material be whether raw material or finished goods:
Color Differences, Pellet Uniformity, Dispersion, Specific Gravity, Shrinkage, Tensile Strength, Elongation, Flexural Strength, Flexural Modules, Izod Impact, MFI and Heat distortion temperature etc.</p>
<div className="learn-more-wrapper"><NavLink to='/aclonpoly/laboratory&manufacturing' className="learn-more">Learn More</NavLink></div>
                </div>
            </div>
        </>

    )
}

const SearchBar = () => {

    const [searchedValue,setSearchedValue] = useState('')
    const [filteredData,setFilteredData] = useState([])
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    function searchValueHandler ( value ) {
        const filteredSearchData = productData.filter((item) => {return item.name.toLowerCase().includes(value.toLowerCase())})
        setSearchedValue(value)
        setFilteredData([...filteredSearchData])
    }

    return (
        <form>
            <div>
                <div className='search-box'>
                <IconButton className="search-icon" color="primary" aria-label="Twitter">
                    <SearchIcon />
                </IconButton>
                <input type='search' className='search-input-container' value={searchedValue} onChange={(e)=>{searchValueHandler(e.target.value)}} onFocus={() => setIsDropdownVisible(true)}
                    onBlur={() => setIsDropdownVisible(false)} placeholder="Search products here..."/>
                </div>

                {isDropdownVisible && searchedValue.length !==0 && ( <div className='search-dropdown-container'>
                    <ul className='search-list-item'>
                    { filteredData.length !== 0 ? filteredData.map((item)=>{
                        return (
                          <li key={item.id} className="each-search-list-item">
                            <NavLink to={`/aclonpoly/products/${item.name}`} className="each-search-list-item-link" >{item.name}</NavLink>
                          </li>
                        )
                    }) : <li style={{}}>No search result found</li> 
                }
                    </ul>
                </div> )
                }
            </div>


        </form>
    )
};


function VideoPlayer() {
  return (
      <video autoPlay loop muted width="600px" height="400px" controls={false} style={{ outline: 'none' }}>
        <source src={videoImage} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
}

export default Home