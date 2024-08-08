import React from "react";
import { Routes, Route } from "react-router-dom"
import Main from "./main";
import Start from "./startap";

const AppRoutes = () =>(
    <Routes>
        <Route path="/" element = { <Main /> } />
        <Route path="/startap" element = { <Start /> } />
    </Routes>
    
)

export default AppRoutes