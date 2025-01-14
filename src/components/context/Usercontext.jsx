import React, { createContext, useState } from 'react'
import run from '../Gemmni'

export const datacontext=createContext()

function Usercontext(props) {
  const[input,setInput]=useState("");
  const[showResult,setShowResult]=useState(false)
  const[loading,setLoading]=useState(false)
  const[resultData,setResultData]=useState("")

 async  function send(prompt){
   await run(prompt)
  }
  const data={
    input,
    setInput,
    send
  }
  return (
    <div>
      <datacontext.Provider value={data} >
      {props.children}
      </datacontext.Provider> 
    </div>
  )
}

export default Usercontext

