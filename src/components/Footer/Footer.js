// Footer.js

import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ACLONlogo from '../../assets/company/ACLONlogo.png'
import './Footer.css'
import productdata from '../../products.json'
import { NavLink } from 'react-router-dom';

const styles = {
  footer: {
    backgroundColor: '#1C2528',
    padding: '20px',
    marginTop: '30px',
    textAlign: 'center',
  },
  socialIcons: {
    margin: '0 8px',
  },
};

const Footer = () => {
  return (
    <footer className="footer" style={styles.footer}>
      <div className='footer-container'>
        <div className='first-block'>

          <img className="footer-logo" src={ACLONlogo} alt="ACLON logo" />
          <p className='orange-color'> Manufacturing of advanced Engineering Recycle & Reinforced Polymer Compounds</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <NavLink to='https://www.facebook.com/'>
              <IconButton style={styles.socialIcons} color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
            </NavLink>
            <NavLink to='https://twitter.com/'>        
            <IconButton style={styles.socialIcons} color="primary" aria-label="Twitter">
              <TwitterIcon />
            </IconButton></NavLink>
            <NavLink to='https://www.instagram.com/'>
              <IconButton style={styles.socialIcons} color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton></NavLink>

          </div>
        </div>
        <div className='second-block'>
          <h2 className='orange-color'> Products</h2>

          {productdata.map((item,index) => {
            return (
              <div key={index}>
                <NavLink className="footer-product-list orange-color" to={`/aclonpoly/products/${item.name}`}> {item.name}</NavLink>
                <br></br>
              </div>

            )
          })}
        </div>
        <div className='third-block'>
          <h2 className='orange-color'>Company</h2>
          <NavLink className="footer-product-list orange-color" color="inherit" to='/'>
            Home
          </NavLink>
          <br></br>
          <NavLink className="footer-product-list orange-color" color="inherit" to='/aclonpoly/products'>
            Products
          </NavLink>
          <br></br>
          <NavLink className="footer-product-list orange-color" color="inherit" to='/aclonpoly/about'>
            About Us
          </NavLink>
          <br></br>
          <NavLink className="footer-product-list orange-color" color="inherit" to='/aclonpoly/contact'>
            Contact Us
          </NavLink>
        </div>

      </div>
      <Typography className="footer-logo-color" variant="h6" gutterBottom>
      </Typography>
      <Typography className="footer-logo-wrapper" variant="subtitle1" color="textSecondary">
        A trusted name  for Compound Polymer Engineering
      </Typography>

      <Typography className="footer-logo-wrapper" variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} ACLON polymer compounds. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
