import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const isMenuThere = useSelector((store)=> store.app.isMenuOpen);

    if(!isMenuThere)
    {
        return null;
    }
 






    return (
        <div className="p-5 shadow-lg w-48  ">


        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li><Link to="/main">LIVE</Link></li>
        </ul>

            <h1 className="font-bold pt-5">Subscription</h1> 
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>

        <h1 className="font-bold pt-5">Watch Later</h1> 
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>

         <h1 className="font-bold pt-5">Subscribed</h1> 
        <ul>
            <li>Love_babbar</li>
            <li>Code-Harry</li>
            <li>Army</li>
            <li>INDIANS</li>
            <li>PUBG</li>
            <li>URI_STRIKE</li>
            <li>US-1999</li>
        </ul>

        </div>
        

       
    )
};

export default Sidebar;