import NavbarOther from "../components/NavbarOther/NavbarOther"
import productData from "../../src/products.json"
import Product from "../components/Product/Product"
import './Products.css'
import Footer from "../components/Footer/Footer"
const Products = () => {


    return (
        <>
            <NavbarOther></NavbarOther>
            <div className="product-page">
      {productData.map((product, index) => (
        <Product
          key={index}
          product = {product}
        />
      ))}
    </div>
   <Footer></Footer>

        </>
    )
}

export default Products