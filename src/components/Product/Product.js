import React, { useState, useEffect } from 'react';
import './Product.css'
import { NavLink } from 'react-router-dom';
const Product = ({ product }) => {
    const [image, setImage] = useState(null);

  useEffect(() => {
    const importImage = async () => {
      try {
        const imageModule = await import(`../../assets/company/${product.image_url}`);
        setImage(imageModule.default);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    importImage();

    // Clean up function
    return () => {
      // Cleanup logic if needed
    };
  }, [product.image_url]);
  return (
    <NavLink to={`/aclonpoly/products/${product.name}`} className="product">
        <div className="product-image">
          <img className='product-image'src={image} alt={product.name} />
        </div>
      <div className="product-description">
        <h2 className='product-description-title'>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </NavLink>
  );
};

export default Product;