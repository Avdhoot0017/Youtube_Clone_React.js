import React from "react";

const Livemsg = ({name,msg})=>
{
    return(

        <div className="flex items-center shadow-lg p-2">
            <img 
            className="h-9"
            alt="user"  src="https://pixlok.com/wp-content/uploads/2021/10/User-Profile-Icon-9mces.png"/>
            <span className="font-bold px-2 ">{name}</span>
            <span>{msg}</span>
        </div>
        
    )
};

export default Livemsg;
