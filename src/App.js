import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./styles/App.css"
import "./styles/responsive.css"

import Cuerpo from "./components/desktop/Cuerpo"
import Header from "./components/desktop/Header"
import Footer from "./components/desktop/Footer"

function App() {

  // const styles = {
  //   background: `url(${bgPrincipal})`
  // };

  return (
    <div className="App" >
      <div className="app_desktop">
        <div className="container" >
            <div className="box shadow">
              <Header />
              <hr className="hr_line" />

              <Cuerpo />

              <Footer />

              <p className="text-white  text_footer">The last payment of 50% will be delivered in 3 equal parts every 15 days, and thus not affect the value of BullBNB.</p>
            
             
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
