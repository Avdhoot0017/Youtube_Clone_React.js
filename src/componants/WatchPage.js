import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appslice";
import { useSearchParams } from "react-router-dom";
import Commentcontainer from "./Commentcontainer";
import Livechat from "./Livechat";

const WatchPage = ()=>
{
    const[serachParams] = useSearchParams();




    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
    return (
        <div className="flex flex-col w-full">
    
    <div className="px-5 flex w-full">
        <div>
           <iframe width="1000" height="500" 
           src={"https://www.youtube.com/embed/" + serachParams.get("v")}

           title="YouTube video player" 
           frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
           </div>

           <div className="w-full">
                 <Livechat/>
           </div>
    </div>

    < Commentcontainer/>
    

    </div>
    
    )
};

export default WatchPage;
