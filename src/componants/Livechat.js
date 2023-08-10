import React, { useEffect, useState } from "react";
import Chatmsg from "./Chatmsg"
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomNames, makeRandomChats } from "./utils/helper";

const Livechat = ()=>
{
    const[livemsg,setLivemsg] = useState("");



   const dispatch = useDispatch();
   const chatmsges = useSelector((store)=>store.chat.messages );



    useEffect(()=>{

        const i = setInterval(()=>{
            // console.log("APLI");

            dispatch(
                addMessage({
                    name: generateRandomNames(),
                    message: makeRandomChats(20)+ " 🍻",

                })
            );


        },2000);

        return ()=> clearInterval(i);



    },[])





    return(
<>

        <div className="w-full h-[500px] m-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll  flex flex-col-reverse"> 
            
            <div >
            {chatmsges.map((c)=>(
                <Chatmsg name={c.name} msg={c.message}/>
            ))}
            </div>
         </div>

         <form className="w-full p-2 ml-2 border border-black rounded-lg" onSubmit={(e)=>
         {e.preventDefault();

            dispatch(addMessage({
                name:"Avdhoot_Walunjkar--🎃",
                message: livemsg, 
            }))
            setLivemsg("");
        
        }}>
            <input className="w-96 px-2 border border-black rounded-lg shadow-lg" type="text" value={livemsg} onChange={(e)=>{setLivemsg(e.target.value)}}/>


            <button className="px-2 mx-2 bg-gray-200"> Comment</button>

         </form>
        </>


    )
};

export default Livechat;
