import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
import Fade from '@mui/material/Fade';
import './Navbar.css'
import MailIcon from '@mui/icons-material/Mail';

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className='navbar' position='static'>
        <div className='top-header'>
            <ul id = "scroll-text" className='head-items'>
                <li className='gst-item'> <strong> GST No. : </strong>16AAKC598012ZP</li>
                <li className='phone-item'>
                    <IconButton className="phone-icon" color="primary" aria-label="Twitter">
                      <CallIcon />
                    </IconButton> +91-9211544425, 9413710823
                </li>
                <li className='mail-item'>
                   <IconButton className="phone-icon" color="primary" aria-label="Twitter">
                      <MailIcon />
                    </IconButton> mail@aclonpoly.com
                </li>

            </ul>
        </div>

      </AppBar>
    </React.Fragment>
  );
}




  
