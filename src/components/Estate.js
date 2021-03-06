import axios from "axios";
import React, { useState , useEffect} from "react";
import "../index.css";

export default function Estate(){

  const[posts, setPosts] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(res => {
      setPosts(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])
  return(
    <div className="bluee">
      {
       posts.slice(0, 5).map(post => (
        <div className="py-5 px-32 mx-auto " id={post.id}>
        <div className=" w-full lg:max-w-full lg:flex">
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${post.url})`}} title="Mountain">
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">Property no. : {post.id} </div>
              <p className="text-gray-700 text-base">{post.title}</p>
            </div>
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src={post.url} alt={post.thumbnailUrl}></img>
            </div>
          </div>
        </div>
      </div>
      ))}
    
    </div>
  )
}


