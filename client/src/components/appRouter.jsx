import React from "react";
import { Routes, Route } from "react-router-dom"
import Main from "./main_stage";
import Start from "./stage_startap";

const AppRoutes = () =>(
    <Routes>
        <Route path="/" element = { <Main /> } />
        <Route path="/stage_startap" element = { <Start /> } />
    </Routes>
    
)

export default AppRoutes