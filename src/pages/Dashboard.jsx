import { useState } from "react";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const Dashboard = () => {
  const[SidebarToggle,setSidebarToggle]=useState(false)
  const [isInquiriesOpen, setIsInquiriesOpen] = useState(false);
  return (
    <div className={` bg-slate-100 `} >
 
     <Navbar 
     SidebarToggle={SidebarToggle} setSidebarToggle={setSidebarToggle}/>
     <div className="flex flex-row">
     <Sidebar SidebarToggle={SidebarToggle}/>

      {/* FAQ Section */}
      <h1 className="text-blue-600 pl-12 mt-2">FAQs</h1>
      <div className="p-10 w-3/4 mr-10 ">
          <div className="bg-white shadow p-4 ">
            <h2 className="text-lg mb-4 text-blue-700 font-semibold">General Inquiries</h2>
            <div className="border rounded-lg overflow-hidden">
             <div>
            
                     <button
                       onClick={() => setIsInquiriesOpen(!isInquiriesOpen)}
                       className="flex items-center justify-between w-full p-1 text-lg hover:bg-blue-100 pr-4 mt-2  rounded overflow-hidden"
                     >
                     
                       <span className="flex items-center ml-6  gap-2">
Who are viable to use this portal
                       </span>
                       <span>{isInquiriesOpen ? "- ": "+"}</span>
                     </button>
                     {isInquiriesOpen && (
                       <div className="pl-6 ">
                         <p className="py-1 cursor-pointer rounded px-2">The Staff,Students and the Admins</p>
                         </div>
                     )}
                   </div>
          </div>
          <h2 className="mt-2 text-blue-600 font-semibold pl-3">Others</h2>
          <div className="flex flex-col items-center mt-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4076/4076432.png"
                alt="No data"
                className="w-24 h-24"
              />
              <p className="text-gray-500 font-bold text-black">No data</p>
              <p className="text-gray-500">No other FAQ found</p>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard