import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import Layout from "../../Components/Layout";

import HomePage from "../../Pages/HomePage";
import ContactPage from "../../Pages/ContactPage";
import AboutUsPage from "../../Pages/AboutUsPage";
import PurchasePage from "../../Pages/PurchasePage";
import SellPage from "../../Pages/SellPage";

const RouterService: React.FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/sell" element={<SellPage />} />
        </Routes>
    );
};

const ConnectedBrowserRouter: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Layout>
                <RouterService />
            </Layout>
        </BrowserRouter>
    );
};

export default ConnectedBrowserRouter;
