import React from 'react';
import { useContext,createContext,useState } from 'react'


const MyContext=createContext();

export const MyProvider=({children})=>{

        
          const [isLogged,setisLogged]=useState(false)
          const [Email,setemail]=useState(" ")
          //this is list at header (shop categories list)
          const [shopCategories,setShopCategories]=useState("ALL Products")
          //search at header value
          const [searchHeaderValue,setSearchHeaderValue]=useState("")


          const Login=()=>setisLogged(true)
          const Logout=()=>setisLogged(false)
          const updateEmail=(newmail)=>{setemail(newmail)}

          return (
            <MyContext.Provider value={{isLogged,Logout,Login,Email,updateEmail,shopCategories,setShopCategories,searchHeaderValue,setSearchHeaderValue}}>
                {children}
            </MyContext.Provider>
          )

}

export const useMyContext=()=>useContext(MyContext)