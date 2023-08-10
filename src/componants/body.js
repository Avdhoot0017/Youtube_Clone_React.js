import React from "react";
import Sidebar from "./sidebar";
import Maincontainer from './MainContainer'
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex" > 
            <Sidebar/>
            <Outlet/>

        </div>
        

       
    )
};

export default Body;