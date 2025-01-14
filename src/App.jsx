import React from 'react'
import SideBar from './components/SideBar'
import ChatSection from './components/ChatSection'
import Sapneration from './components/Sapneration'


function App() {
 
  return (
    < >
   <div className='flex'>
   <SideBar/>
   <Sapneration/>
   <ChatSection/>
   </div>
    </>
  )
}

export default App
