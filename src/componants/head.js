import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appslice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { json } from "react-router-dom";
import { catchResults } from "./utils/searchSlice";
import SearchItem from "./searchITEM";


const Head = () => {

    const [searchQuery,setSearchQuery] = useState("");
    const [suggesions,setSuggesions] = useState([]);
    const [showsuggestion,setShowsuggestion] = useState(false);


    const searchcache = useSelector((store)=> store.search);
    const dispatch = useDispatch();

    

    useEffect(()=>{

        //API call after every change in serchquery
       const timer =  setTimeout(()=>  
       {
       if(searchcache[searchQuery])
       {
        setSuggesions(searchcache[searchQuery])
       }else{
        getSearchSuggestions()

       }
    },200);

       return()=>{
        clearTimeout(timer)

       };

    },[searchQuery]);

    const getSearchSuggestions = async ()=>
    {
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggesions(json[1]);


        //update slice catche

        dispatch(
            catchResults({
                [searchQuery] : json[1],


            })
        )


    }


    

    const toggleMenuHandler =  ()=>{
        dispatch(toggleMenu());

    }
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg" >
        <div className="flex col-span-1 "> 
            <img
            onClick={()=> toggleMenuHandler()}
            className="h-8  cursor-pointer"
             alt="menu" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-4562823-3856517.png?f=webp"/>
             <a href="/">
            <img
            className="h-8 mx-4"
             alt="logo-y" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"/>
             
             </a>
             </div>
        <div className="col-span-10 px-20">
            <div>
            <input  
            className=" px-5 w-1/2 border border-gray-400 p-1 rounded-l-full shadow-lg " 
             type="text" value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              onFocus ={()=> setShowsuggestion(true)}
             
             
            />
            <button className=" border border-gray-400 p-1 rounded-r-full bg-gray-100 shadow-lg"
            >Search</button>
            </div>
            {showsuggestion && (<div className="fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100" >
                <ul>
                   
                    {suggesions.map((s)=>(

                         <button
                         
                         onClick={()=>setSearchQuery(s)}
                         onBlur ={()=> setShowsuggestion(false)}

                        
                        
                         
                          
                          key={s} className="py-2 px-3  shadow-sm hover:bg-gray-100" >{s}</button>

                    ))}
                    
                </ul>
            </div>)}
        </div>
        <div className="col-span-1 flex">
            <img 
            className="h-9"
            alt="user"  src="https://pixlok.com/wp-content/uploads/2021/10/User-Profile-Icon-9mces.png"/>
            <p className="m-2 px-2">USER</p>
        </div>
        </div>
       
        

       
    )
};

export default Head;