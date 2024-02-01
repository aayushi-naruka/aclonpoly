import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./Carousel.css"
import img14 from '../../assets/company/Group 14.png'
import img15 from '../../assets/company/Group 15.png'
import img16 from '../../assets/company/Group 16.png'
import { NavLink } from "react-router-dom";


const exampleItems = [
  {
    name: "ABS Compounds",
    image_url: img14,
    description: "Its been more than a decades wherein we have been serving plastic manufacturing industry with various kinds of raw materials, primarily Polymer Compounds, as B2B Suppliers. In order to further diversify we have recently started our new venture and founded another company in the year 2022 called Aclon Poly Compounds Pvt. Ltd. "
  },
  {
    name: "PBT Compounds",
    image_url: img15,
    description: "PBT (Polybutylene terephthalate) compounds are thermoplastic engineering materials known for their excellent mechanical properties, thermal stability, and electrical insulation characteristics. PBT is a semi-crystalline polymer that exhibits high strength, stiffness, and dimensional stability, making it suitable for a wide range of applications across industries. "
  },
  {
    name: "Polypropylene for Automotive Sector",
    image_url: img16,
    description: "Polypropylene (PP) serves as a pivotal material in the automotive sector, renowned for its versatile properties and wide-ranging applications. As a lightweight thermoplastic polymer, PP contributes significantly to enhancing fuel efficiency and reducing overall vehicle weight, thereby aiding in improved performance and reduced emissions.  "
  }
];

const CarouselComponent = () => {
  return (
    <Carousel
      animation="slide"
      indicators={true}
      timeout={3000}
      navButtonsAlwaysVisible={false}
      navButtonsAlwaysInvisible={true}
      cycleNavigation={true}
      fullHeightHover={false}
      className="carousel-wrapper"
      sx={{
        flexGrow: 1,
        margin: "20px",
      }}
    >
      {exampleItems.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper
      sx={{
        backgroundColor: "inherit",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        p: 4,
        boxShadow: 'none'
      }}
    >
    <div className="carousel-container">
      <div>
      <img className="carousel-images" src={props.item.image_url} alt={props.item.name}/>

      </div>
    <div className="image-description">
      <h4 className="carousel-title">{props.item.name}</h4>
      <p>{props.item.description}</p>
      <div className="view-more-wrapper"><NavLink to={`/aclonpoly/products/${props.item.name}`} className="view-more">View Detail</NavLink></div>
    </div>
    </div>  


    </Paper>
  );
}

export default CarouselComponent;