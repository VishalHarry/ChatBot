import React, { createContext, useState } from 'react'
import run from '../Gemmni'

export const datacontext=createContext()

function Usercontext(props) {
  const[input,setInput]=useState("");
  const[showResult,setShowResult]=useState(false)
  const[loading,setLoading]=useState(false)
  const[resultData,setResultData]=useState("")
  const[resentPrompt,setResentPrompt]=useState("");

 async  function send(prompt){
  setResultData("")
  setShowResult(true);
  setResentPrompt(input)
  setLoading(true);
  const response= await run(prompt)
  setResultData(response.split("**")&&response.split("*"))
  setInput("")
  setLoading(false);
  }
  const data={
    input,
    setInput,
    send,
    loading,
    setLoading,
    showResult,
    setShowResult,
    resultData,
    setResultData,
    resentPrompt
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

