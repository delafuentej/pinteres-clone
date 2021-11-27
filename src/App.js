import React,{useState} from "react";

import Navbar from "./Components/Navbar/Navbar";
import List from "./Components/List/List";

function App() {
  const[term,setTerm]=useState("")
  const handleSearch=(term)=>{
    setTerm(term);

  }
  return (
    <>
      <Navbar 
      handleSearch={handleSearch}
      />
      <List
      filter={term}
      />
     
    </>
  );
}

export default App;
