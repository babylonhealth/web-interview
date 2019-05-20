import React from 'react';
import Menu from 'react-feather/dist/icons/menu';

import logo from '../../images/babylon.png';
import Logo from '../logo/Logo';
import './styles.scss'

const Header = () => (
    <div className="header">
        <Menu />
        <div className="logo"><Logo logo={logo} alt="Babylon Health" /></div>
        <div className="nu">NU</div>
    </div>
)

export default Header;