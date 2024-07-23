import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStore, faShoppingBag, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidenav ${isOpen ? 'open' : 'closed'}`}>
    <Link to='/' className='brand'>
    <img src='https://media.discordapp.net/attachments/1260921373090386020/1262906965294579722/TypeFlat.png?ex=6698f604&is=6697a484&hm=14461e80770ef3e6b1ac2eff0b494653c2d614f1d600b97beccd8c7b2bac6b99&' alt=''/>
  </Link>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <ul>
        <li className={isActive('/') ? 'active' : ''}>
          <Link to='/'>
            <FontAwesomeIcon icon={faStore} className={isActive('/') ? 'rotate' : ''} />
            {isOpen && <span>Store</span>}
          </Link>
        </li>
        <li className={isActive('/bag-items') ? 'active' : ''}>
          <Link to='/bag-items'>
            <FontAwesomeIcon icon={faShoppingBag} className={isActive('/bag-items') ? 'rotate' : ''} />
            {isOpen && <span>Bag</span>}
          </Link>
        </li>
        <li className='bottom'>
          <Link to='/' className='bottom-dm2'>
            <FontAwesomeIcon icon={faSignOutAlt} />
            {isOpen && <span>Logout</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
