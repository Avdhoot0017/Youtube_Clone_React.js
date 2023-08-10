
import React, { useEffect, useState } from "react";
import {YOUTUBE_VIDEO_API} from './utils/constants'
import Videocard from './videoCards'
import { Link } from "react-router-dom";

const Videocontainer = () => {

    const [videos,setVideos] = useState([]);


    useEffect(()=>{
        getvideos();
    },[]);



    const getvideos = async ()=>{

        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        
        setVideos(json.items)



    }
    return (
        <div className="flex flex-wrap "> 
         

           {videos.map((video)=>(
            <Link  key={video.id} to={"/watch?v="+ video.id}> <Videocard info={video}/></Link>
           ))}

            
        </div>
        

       
    )
};

export default Videocontainer;