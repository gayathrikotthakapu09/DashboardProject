import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import './App.css'
import Dashboardcontent from "./Components/Dashboardcontent";
                     

const App = () => {
  return (
    <div className="container-fluid App ">
      <div className="row">
        <Sidebar />
      </div>
      <div className="col-12  ">
        <Header />
        <Dashboardcontent/>
      </div>
    </div>
  );
};

export default App;
