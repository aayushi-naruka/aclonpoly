import NavbarOther from "../components/NavbarOther/NavbarOther"
import manufacturing from '../assets/company/manufacturing.png'
import ProductCarousel from "../components/ProductCarousel/ProductCarousel"
import './Laboratory.css'
import Footer from "../components/Footer/Footer"

const Laboratory = () => {

    let laboratoryImages = ['Laboratory1.png','Laboratory2.png','Laboratory3.png','Laboratory4.png','Laboratory5.png','Laboratory6.png']

    return (
        <>
            <NavbarOther></NavbarOther>
            <div className="manufacturing-page">
                <div className="manufacturing">
                    <div className="manufacturing-image">
                        <img className="lab-image" src={manufacturing} alt='manufacturing-image' />
                    </div>
                    <div className="manufacturing-text">
                        <h1> MANUFACTURING AND LABORATORY</h1>
                        <p>The company is not only well equipped with all the latest and sophisticated testing machines as under:

                            Conditioner Chamber, Universal Tensile Tester, Izod Impact Tester, Spectrophotometer, MFI Tester, Muffel Furnace
                            HDT / VSP Tester and Rockwell hardness Tester etc.

                            And to operate them we have well qualified and experienced staff to perform various quality checks on following parameters to check the over all quality of the respective material be whether raw material or finished goods:

                            Color Differences, Pellet Uniformity, Dispersion, Specific Gravity, Shrinkage, Tensile Strength, Elongation, Flexural Strength, Flexural  Modules, Izod Impact, MFI and Heat distortion temperature etc.
                        </p>
                    </div>

                </div>
                <div className="manufacturing">

                    <div className="manufacturing-text">
                        <h1>Extensive R&D and Quality Control</h1>
                        <p>
                            ACLON is equipped with all the latest and sophisticated testing machines to test the raw material and finished goods. In the laboratory there are qualified staffs to test the raw material on line process control and finished goods and tested for color difference, pellet, uniformity, dispersion, specific gravity, shrinkage, tensile strength, elongation, flexural strength, flexural modules, izod impact, MFI, heat distortion temperature etc
                        </p>

                        <h3> Lab Testing Equipments Used By ACLON</h3>
                        <ul>
                            <li>Conditioning Chamber</li>
                            <li>Universal Tensile Tester</li>
                            <li>Izod Impact Tester</li>
                            <li>Spectrophotometer</li>
                            <li>MFI Tester</li>
                            <li>Muffel Furnace</li>
                            <li>HDT / VSP Tester</li>
                            <li>Rockwell Hardness Tester</li>
                        </ul>
                    </div>
                    <div className="manufacturing-image">
                       <ProductCarousel imageList = {laboratoryImages}></ProductCarousel>
                    </div>
                </div>
            </div>
<Footer></Footer>
        </>
    )
}

export default Laboratory