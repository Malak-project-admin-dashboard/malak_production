// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";


//------------------------ المريض -------------------------
import Seminar from './Pages/Seminars/Seminars';
import Food from './Pages/Food/Food';
import Navbar from './Pages/Layout/Navbar';

import Recipes from './Pages/Food-recipes/Recipes';
import Home from './Pages/Home/Home';
import Drug from './Pages/drug/drug';
import Footer from './Pages/Layout/Footer';
import About from './Pages/About-us/About';
import Contact from './Pages/Contact/Contact';

import Login from './Pages/Loge&Sign/Login';
import Signin from './Pages/Loge&Sign/Signin';
import ProfileUser from './Pages/Layout/ProfileUser';
// import DrugCard from './Pages/drug/DrugCard';


// import MyDrug from './Pages/drug/MyDrug';
//------------------- الشيف ----------------------
import EdetCardChef from './Pages/Chef/EdetCardChef'
import ProfileChef from './Pages/Chef/ProfileChef';
import HomChef from './Pages/Chef/HomChef';
import NavbarChif from './Pages/Layout/NavbarChif';

//------------------ Dashboard  ----------------------- //



// insaid Element inpote Name Component
function App() {
  const [hideRouter1, setHideRouterUser] = useState(false);
  const [hideRouter2, setHideRouterAdmin] = useState(true);
  const [hideRouter3, setHideRouterProvider] = useState(true);


  
  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      console.log(token);
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        let x =[];
        
        if(response.data.user.role ==1){
          x= [true ,false,true ]
        }else if (response.data.user.role ==2){
          x= [true ,true,false]
        }else{
          x= [false ,true,true ]
        }
        setHideRouterUser(x[0]);
        setHideRouterAdmin(x[1]);
        setHideRouterProvider(x[2]);
        // updateRouts(x)

      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem("auth");
      window.location.href = "http://localhost:3000/Login";
    } finally {
      console.log(false);
    }
  };


  useEffect(() => {
    if (localStorage.auth != null) {
      fetchProtectedData()
    }else{
      setHideRouterUser(false);
      setHideRouterAdmin(true);
      setHideRouterProvider(true);
    }
  }, []);  

 //------------------  user Router ----------------------- //
 
 const AppRouter1 = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Contact" element={<Contact/>} />
         <Route path="/Seminar" element={<Seminar />} />
         <Route path="/Food" element={<Food />} />
         <Route path="/About" element={<About/>} />
         <Route path="/Login" element={<Login/>}/>
<Route path="/Sigin/:type" element={<Signin/>}/>
<Route path="/drug" element={<Drug />} />
<Route path="/Recipes" element={<Recipes />} />
        <Route path="ProfileUser" element={<ProfileUser />} />
        {/* <Route path="DrugCard" element={<DrugCard />} /> */}
        {/* <Route path="MyDrug" element={<MyDrug />} /> */}
        {/* <Route path="/PaymentPage/:currentPrice/:ProviderId/:PostId/:userId" element={<PaymentPage />} /> */}


      </Routes>
      <Footer />
    </Router>
  );
};


 //------------------  Dashboard Router ----------------------- //
//  const AppRouter2 = () => {
//   return (
//     <Router>
//       <Sidebar />
//       <div style={{ width: "100%" }}>
//         <Navbar />
//         <Routes>
//           <Route index element={<MainDashboard />} />
//           <Route path="ListUser" element={<UserInfo />} />
//           <Route path="EditAboutContact" element={<EditAboutContact />} />
//           <Route path="Chat" element={<Chat />} />
//           {/* <Route path="UserProfile" element={<UserProfile />} /> */}
//           <Route path="ListRestaurant" element={<ApproveTable />} />
//           <Route path="ListAdmin" element={<AdminInfo />} />
//           <Route path="AcceptTables" element={<PendingPosts />} />
//           <Route path="PaymentsInfo" element={<PaymentsInfo />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };



//------------------  chif Router ----------------------- //
const AppRouter3 = () => {
  return (
    <Router>
      <NavbarChif/>
      <Routes>
        <Route index element={<HomChef />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="ProfileChef" element={<ProfileChef />} />
        
        <Route path="EdetCardChef" element={<EdetCardChef />} />
      </Routes>
      <Footer />
    </Router>
  );
};

  
return (
  <>
    {hideRouter1 ? null : (
      <>
        <AppRouter1 />
      </>
    )}

    {hideRouter2 ? null : (
      <>
        <div className="flex">
          {/* <AppRouter2 /> */}
        </div>
      </>
    )}

    {hideRouter3 ? null : (
      <>
        <AppRouter3 />
      </>
    )}

  </>

);
}

export default App;
