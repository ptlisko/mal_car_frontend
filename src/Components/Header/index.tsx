import * as React from 'react';

import Logo from './Components/Logo';

import './styles.css';

const Header: React.FC = (): JSX.Element => {
    return (
        <div className='mal-car-header'>
            <Logo />
        </div>
    );
};

export default Header;
