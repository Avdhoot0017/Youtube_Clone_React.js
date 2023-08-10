import React from "react";
import Buttonlist from './buttonList'
import Videocontainer from './VideoCotainer'

const Maincontainer = () => {
    return (
        <div className="col-span-11"> 
            <Buttonlist/>
            <Videocontainer/>

        </div>
        

       
    )
};

export default Maincontainer;