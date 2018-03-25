import React from 'react';
import { Link } from 'react-router-dom';

const MainMenuLink = () => (
  <div className="main-menu-link">
    <Link className="main-menu-link__link" to='/'>Back to menu</Link>
  </div>
)

export default MainMenuLink;