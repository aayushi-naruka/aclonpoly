import React , {useEffect,useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../Home/Home";
import './Dashboard.css'
function Dashboard() {
    return (<>
     <div className="background-image">
     <Navbar/>
       <Home/>
       <Footer/>
     </div>
     </>

    );
  }
  
  export default Dashboard;