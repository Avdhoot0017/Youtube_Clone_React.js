import React from "react";



const commentdata = [
    {
        name: "avdhoot",
        text: "its a good video",
        replies:[]



    },

    {
        name: "avdhoot",
        text: "its a good video",
        replies:[
            {
                name: "avdhoot",
                text: "its a bad video",
                replies:[
                    {
                        name: "avdhoot",
                        text: "its a good video",
                        replies:[]
                
                
                
                    },
                    {
                        name: "avdhoot",
                        text: "its a good video",
                        replies:[]
                
                
                
                    },
                ]
        
        
        
            },

            {
                name: "avdhoot",
                text: "its a bad video",
                replies:[]
        
        
        
            },

        ]



    },

    {
        name: "avdhoot",
        text: "its a good video",
        replies:[
            {
                name: "avdhoot",
                text: "its a good video",
                replies:[]
        
        
        
            },
        ]



    },

    {
        name: "avdhoot",
        text: "its a good video",
        replies:[
            {
                name: "avdhoot",
                text: "its a good video",
                replies:[]
        
        
        
            },{
                name: "avdhoot",
                text: "its a good video",
                replies:[
                    {
                        name: "avdhoot",
                        text: "its a good video",
                        replies:[]
                
                
                
                    },
                ]
        
        
        
            },
        ]



    },
];




const Comment = ({data})=>{

    const {name,text,replies} = data;


    return(
        <div className="flex shadow-lg bg-gray-100  rounded-lg p-2 my-2">
            <img
            className="w-10 h-10"
             alt="user" src="https://pixlok.com/wp-content/uploads/2021/10/User-Profile-Icon-9mces.png"/>
             <div className="px-3 ">
                <p className="font-bold"> {name}</p>
                <p> {text}</p>

             </div>
        </div>
    )
}


const Commenlist = ({comments})=>
{
    return comments.map((coment,index )=>
    ( 
    <div  key={index}>
         <Comment data={coment}/>

         <div className="pl-5 border border-l-black ml-5">
            <Commenlist comments={coment.replies}/> 
        

         </div>

    </div>
    
    ));
    
    
      
}


const Commentcontainer = () =>
{
    return(

        <div className="m-5 p-2 ">
            <h1 className="text-2xl font-bold">
                Comments:
            </h1>
            <Commenlist comments={commentdata}/>

        </div>
    )
}

export default Commentcontainer;
