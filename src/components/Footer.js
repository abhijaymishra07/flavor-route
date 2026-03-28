import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} FlavorRoute. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = { textAlign: 'center', padding: '20px', backgroundColor: '#0a0a0a', borderTop: '1px solid #333', color: '#777', marginTop: 'auto' };

export default Footer;