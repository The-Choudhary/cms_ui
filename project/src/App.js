
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./project/dashboard";
import { useState } from "react";

import AddEnquery from "./project/add_enquery";
import ViewEnquery from "./project/view_enquery";
import ViewStudents from "./project/view_students";
import DemoStudents from "./project/demo_student";
import Pendingfee from "./project/pending_fee";
import ViewInvestment from "./project/view_investment";
import AddInvestment from "./project/add_investment";
import ExtraIncome from "./project/extra_income";
import AddExtraIncome from "./project/add_extrainc";
import Error from "./components/error";
import Buisness from "./project/buisness";
import BuisnessAnalysis from "./project/buisness_analysis";
import Help from "./project/help";
import Profile from "./project/profile";
import Login from "./project/login";



function App() {
  const [token, setToken] = useState(localStorage.getItem('Name'));

  console.log(localStorage.getItem('Name'));

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <BrowserRouter>
    <Routes>
      < Route path="*" element={<Error/>}/>
      < Route path="/" element={<Dashboard/>}/>
      < Route path="/add-enquery" element={<AddEnquery/>}/>
      < Route path="/view-enquery" element={<ViewEnquery/>}/>
      < Route path="/view-students" element={<ViewStudents/>}/>
      < Route path="/view-demo" element={<DemoStudents/>}/>
      < Route path="/pending-fee" element={<Pendingfee/>}/>
      < Route path="/view-investment" element={<ViewInvestment/>}/>
      < Route path="/add-investment" element={<AddInvestment/>}/>
      < Route path="/extra-income" element={<ExtraIncome/>}/>
      < Route path="/add-income" element={<AddExtraIncome/>}/>
      < Route path="/business-analysis" element={<BuisnessAnalysis/>}/>
      < Route path="/business-wallet" element={<Buisness/>}/>
      < Route path="/help" element={<Help/>}/>
      < Route path="/profile" element={<Profile/>}/>
      < Route path="/login" element={<Login/>}/>




    </Routes>
    </BrowserRouter>
  );
}

export default App;
