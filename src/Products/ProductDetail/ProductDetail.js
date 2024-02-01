import { NavLink, useLocation } from "react-router-dom"
import NavbarOther from "../../components/NavbarOther/NavbarOther"
import './ProductDetail.css'
import productjson from '../../products.json'
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel"
import Footer from "../../components/Footer/Footer"
const ProductDetail = () => {

    const location = useLocation()
    let splittedPath = location.pathname.split('/')
    let productname = decodeURI(splittedPath[splittedPath.length - 1])
    let product_data = productjson.filter((item) => { return item.name === productname })
    return (
        <>
            <NavbarOther></NavbarOther>
            <div className="product-detail-section">
            <h1 className="product-name-heading">{product_data[0].name}</h1>
                <div className="top-product-section">
                    
                    <div className="product-carousel-container">
                        <ProductCarousel imageList={product_data[0].product_images}></ProductCarousel>
                        <div className="send-mail">
                        <div className="send-mail-button-container"> 
                          <NavLink to='/aclonpoly/contact' className='send-mail-button'>
                             Send Query
                          </NavLink>
                        </div>
                        </div>

                    </div>
                    <div className="product-basic-container">
                        <p>{product_data[0].about}</p>
                        <p>{product_data[0].description}</p>
                        <ul className="features-section">
                            {Object.entries(product_data[0].details).map(([key, value]) => (
                                <li className="each-feature"key={key}>
                                    <span className="detail-key">{key}:</span>
                                    <span className="detail-value">
                                        {Array.isArray(value) ? (
                                            <ul>
                                                {value.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            value
                                        )}
                                    </span>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        </>
    )
}

export default ProductDetail