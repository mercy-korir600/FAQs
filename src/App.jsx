
// import { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
 
  return (
    <div className='bg-blue-700'>
    
    <Router>
      <Routes>
        {/* SidebarToggle={SidebarToggle} setSidebarToggle={setSidebarToggle} */}
        <Route path="/" element={<Dashboard /> }/>
      
      </Routes>
    </Router>
  
    </div>
  )
}

export default App
