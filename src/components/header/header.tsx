import React from 'react';
import HeaderNavbar from './headerNavbar'
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Container className='mw-100 mx-0 p-0'>
      <HeaderNavbar />
    </Container>
  )
}

export default Header;
