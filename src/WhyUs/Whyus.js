import NavbarOther from "../components/NavbarOther/NavbarOther"
import './Whyus.css'
import certificate1 from '../assets/company/certificate1.png'
import certificate2 from '../assets/company/certificate2.png'
import certificate3 from '../assets/company/certificate3.png'
import Footer from "../components/Footer/Footer"

const Whyus = () => {


    return (
        <>
            <NavbarOther></NavbarOther>
            <div className="whyus-data">
                <div className="whyus-title">
                   WHY US?
                </div>
                <div className="whyus-description whyus-bg">
                  <p>We at Aclon also like to maintain our existing business philosophy i.e. “a bond of trust with our prestigious Clients to ensure that they get the premium quality products at most competitive price from our end”. We would also like to maintain our special focus on post sales services and therefore having an excellent team of competent service engineers to provide quality services to our respective Clients.  

Our Vision is to be the most successful name in our Industry and to achieve our vision we all have single mission in our minds and i.e. Quality Products at a most competitive price. 
</p>
                </div>
                <div className="whyus-title">
                    Quality Assurance
                </div>
                <div className="whyus-description qa-bg">
                    At ACLON, we prioritize quality assurance throughout our manufacturing process to ensure that our polymer compounds meet industry standards.
                    <ul>
                        <li> To achieve the quality assurance, we have implemented comprehensive quality controls measures t gurantee the performance and reliability of our products.</li>
                        <li> We carefully evaluate and select high quality raw materials from trusted suppliers.</li>
                        <li> We utilize in house advanced testing techniques and equipments to analyze the properties of our compounds.</li>
                        <li> To deduct any variations or deviations we employ statistical process control methods</li>
                        <li> For continuous improvement in manufacturing processes to enhance efficiency and product quality. ACLON regularly reviews and analyzes data.</li>
                        <li> ACLON always welcome value feedback from customers to constantly improve products.</li>
                        <li> we understand that consistent, reliable quality is paramount in meeting the needs of our customers.</li>
                    </ul>
                </div>
                <div className="whyus-title">
                 CERTIFICATIONS AND ACHIEVEMENTS
                </div>
                <div className="certificates-all whyus-description">
                  <img className='certificates' src={certificate1}/>
                  <img className='certificates' src={certificate2}/>
                  <img className='certificates' src={certificate3}/>

                </div>
            </div>
<Footer></Footer>
        </>
    )
}

export default Whyus