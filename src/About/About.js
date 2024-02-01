import NavbarOther from "../components/NavbarOther/NavbarOther"
import './About.css'
import aclonTag from '../assets/company/aclonTag.png'
import aboutPageImage from '../assets/company/about-page.png'
import Footer from "../components/Footer/Footer"

const About = () => {


    return (
        <>
            <NavbarOther></NavbarOther>
            <div className="about-page">
            <div className="about-container">
                <div className="about-title">
                    ABOUT US
                </div>
                <div className="about-description">
                    <p>
                        <strong>Aclon Poly Compounds Pvt. Ltd.,</strong> Manufacturer of high quality polymer compounds to meet the specific need of our renoowned customers.
                        <br></br>
                        As experienced team, we specialize in formulating compounds to meet the unique requirements of applications in industries such as automotive, electronics, lightning and more. The team create compounds to optimize performance charateristics such as <strong>strength, flexibility, flame resistance, heat resistance, and dimensional stability.</strong>
                        <br></br>
                        At <strong>Aclon</strong>, customer satisfaction is our top priority. We work closely with our clients to understand their specific requirements and provide custom solutions tailored to their need.
                        <br></br>
                        Our world-class facilities have enabled us to manufacture premium quality plastic compounds with an annual production capacity of 3000MT from multiple sites located around Delhi NCR. We maintain a bond of trust with our clients ensuring that they recieve premium quality products.
                        <br></br>
                        Whether you require compounds <strong>compounds for injection moulding, extrusion, blow moulding</strong>, or any other polymer processing technique, ACLON will be your trusted partner.
                        Its been more than a decades wherein we have been serving plastic manufacturing industry with various kinds of raw materials, primarily Polymer Compounds, as B2B Suppliers. In order to further diversify we have recently started our new venture and founded another company in the year 2022 called Aclon Poly Compounds Pvt. Ltd. wherein we are manufacturing the superior quality of thermoplastic engineering compounds to cater the specific requirements of Automobiles, Home Appliances and Lighting sector.
                        <br></br>
                        Under the able guidance, domain knowledge and expertise of visionary Dr. Alok Vikramanta and promoters of the company we are able to produce not only the environment friendly but the best quality of  products at our strategically located factory premises at Bawana Industrial area, a renowned Asian plastic industry hub.

                    </p>
                </div>

            </div>
            <div className="about-page-image-container">
               <img className='about-page-image' src={aboutPageImage} alt='falling polymers'></img>
            </div>
            </div>
            <div className="marketing-container">
            <div className="about-page-image-container">
            <img height='110px' width='300px' src={aclonTag} alt='aclon-tag'></img>
            </div>
            <div className="marketing-container-text">
                <div className="marketing-title">
                    Marketing / After Sales Services
                </div>
                <div className="about-description">
                    <p>
                        <strong>ACLON</strong> has a team of marketing executive sales engineer to promote and market the company products. The company has got full fledged team of competent services engineers to provide after sales services.
                    </p>
                </div>

            </div>
            
            </div>

<Footer></Footer>
        </>
    )
}

export default About