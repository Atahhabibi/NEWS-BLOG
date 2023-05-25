import React from "react";
import { useAppContext } from "./contextAPI";
import "./SearchBar.css";
import { useState,useEffect } from "react";

const SearchBar = () => {
    const {setQuery,query}=useAppContext();
    const [value, setValue] = useState("")

   const handleInput=(e)=>{

    const value=e.target.value;
    if(value.length>1 && e.key==='Enter'){
      setQuery(value)
    }
   }

    
  return (
    <div className="search__container">
      <input className="search__input" type="text" placeholder="Search" value={value} onChange={(e)=>setValue(e.target.value)} onKeyUp={handleInput} />
    </div>
  );
};

export default SearchBar;
