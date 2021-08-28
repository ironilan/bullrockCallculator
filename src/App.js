import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./styles/App.css"
import "./styles/responsive.css"

import Cuerpo from "./components/desktop/Cuerpo"
import Header from "./components/desktop/Header"
import Footer from "./components/desktop/Footer"
import { DataProvider } from "./context/DataContext"



function App() {

  
  return (
    <DataProvider>
      <div className="App" >
        <div className="app_desktop">
          <div className="container" >
              <div className="box shadow">
                <Header />
                <hr className="hr_line" />

                <Cuerpo />

                <Footer />

                
                          
              </div>
          </div>
        </div>
      </div>
    </DataProvider>
    
  );
}

export default App;
