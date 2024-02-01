import React, {useEffect,useState} from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./ProductCarousel.css"
import { NavLink } from "react-router-dom";



const ProductCarousel = (props) => {

const imageItems = props.imageList;


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
      {imageItems.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
    const [image, setImage] = useState(null);

    useEffect(() => {
      const importImage = async () => {
        try {
          const imageModule = await import(`../../assets/company/${props.item}`);
          setImage(imageModule.default);
        } catch (error) {
          console.error('Error loading image:', error);
        }
      };
  
      importImage();
    }, [props]);
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
      <img className="carousel-images" src={image} alt={props.item}/>

      </div>
    </div>


    </Paper>
  );
}

export default ProductCarousel;