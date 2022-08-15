import * as React from 'react';

import Router from '../Services/RouterService';

import './styles.css';

const MalCarApp: React.FC = (): JSX.Element => {
    return (
        <div className="mal-car-root">
            <Router />
        </div>
    );
};

export default MalCarApp;
