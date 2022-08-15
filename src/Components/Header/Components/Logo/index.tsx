import * as React from 'react';

import './styles.css';

const Logo: React.FC = (): JSX.Element => {
    return (
        <div className='mal-car-header-logo'>
            <div className='mal-car-logo-wrap'>
                Mal Car s.r.o.
            </div>
        </div>
    );
};

export default Logo;
