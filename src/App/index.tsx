import * as React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import Router from '../Services/RouterService';

import ProxyServiceProvider from '../Services/ProxyService/context';
import StorageServiceProvider from '../Services/StorageService/context';
import LocalizationServiceProvider from '../Services/LocalizationService';

import './styles.css';

// Create React Quary Client
const queryClient = new QueryClient();

const MalCarApp: React.FC = (): JSX.Element => {
    return (
        <div className="mal-car-root">
            <QueryClientProvider client={queryClient}>
                <StorageServiceProvider>
                    <LocalizationServiceProvider>
                        <ProxyServiceProvider>
                            <Router />
                        </ProxyServiceProvider>
                    </LocalizationServiceProvider>
                </StorageServiceProvider>
            </QueryClientProvider>
        </div>
    );
};

export default MalCarApp;
