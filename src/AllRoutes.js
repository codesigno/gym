import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Services from './pages/Services'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'



export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
