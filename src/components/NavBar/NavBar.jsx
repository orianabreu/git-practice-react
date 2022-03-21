import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
    </nav>
  )
}
