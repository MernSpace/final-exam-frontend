import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import UserRegistrationPage from "./pages/user-registration-page.jsx";
import LoginPage from "./pages/login-page.jsx";
import ProductPage from "./pages/product-page.jsx";
import DetailPage from "./pages/detail-page.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/registration" element={<UserRegistrationPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/product" element={<ProductPage/>}/>
                <Route path='/details/:id' element={<DetailPage/>}/>
            </Routes>
            
        </BrowserRouter>
    );
};

export default App;