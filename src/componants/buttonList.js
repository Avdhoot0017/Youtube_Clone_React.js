import React from "react";
import Button from "./Button";



 
const List = ["All", "Socker" , "Cricket","Love", "Movies", "Cooking" ,"Live", "Songs",  "Gaming", "Movies", "Movies", "Cooking" ,"Live" ];

const Buttonlist = () => {


    return (
        <div className="flex"> 
        
            {List.map((list,index)=>(
                <Button  name={list} key={index} />
            ))}
            
           
           
        </div>
        

       
    )
};

export default Buttonlist;