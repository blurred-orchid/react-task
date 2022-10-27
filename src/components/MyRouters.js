import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Channel from "../pages/Channel";


const MyRouters = () => {
    return(<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/channel" element={<Channel/>} />
        <Route path="/channel/:id" element={<Channel/>} />  
    </Routes>)
}

export default MyRouters