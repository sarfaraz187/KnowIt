import React from 'react';
import Navbar from './Navbar/NavComponents'

class Header extends React.Component {
  render() {
    return (
      <header className="banner">
        <Navbar/>
      </header>
    )
  }
}

export default Header