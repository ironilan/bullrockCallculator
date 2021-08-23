import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./styles/App.css"
import "./styles/responsive.css"

import Cuerpo from "./components/desktop/Cuerpo"
import Header from "./components/desktop/Header"
import Footer from "./components/desktop/Footer"



function App() {

  const priceBLR = '0.00003';
    const priceBNB = '0.3';

  const [dollarBNB, setDollarBNB] = useState('30,000')
  const [tokenBNB, setTokenBNB] = useState('10,000,000')
  

  const [dollarBLR, setDollarBLR] = useState('300,000')
  const [tokenBLR, setTokenBLR] = useState('10,000,000,000')

  const [bullBNB, setBullBNB] = useState('1,000,000')
  const [receive, setReceive] = useState('5,555.55')
  const [retain, setRetain] = useState('5,555.55')
  const [m1, setM1] = useState('333,333.3')
  const [m2, setM2] = useState('1,000,000')
  const [m3, setM3] = useState('1,000,000')
  const [dayli, setDayli] = useState('11,111.11')
  const [receiveQuaterly, setReceiveQuaterly] = useState('1,000,000')
  const [accumulated, setAccumulated] = useState('1,000,000')
  const [Total, setTotal] = useState('1,000,000')

  const handleClick = (e) => {
    //console.log(e.target.getAttribute('data-token'));

    let tokens = e.target.getAttribute('data-token');
    

    //Dollars
    let dollarsbrock =  tokens * priceBLR;
    setDollarBLR(dollarsbrock.toFixed(2));

    let tokensbullbnb = dollarsbrock / priceBNB;
    setTokenBNB(tokensbullbnb.toFixed(2));

    let dollarsbbnb =  priceBNB * tokensbullbnb;
    setDollarBNB(dollarsbbnb.toFixed(2));
	  // Tokens
    let tokensbullrock = tokens;
    setTokenBLR(tokensbullrock);
	

    //DAILYMONTHS
    let stakebullbnb = tokensbullbnb;
    setBullBNB(stakebullbnb.toFixed(2));

    let mounths_1 = tokensbullbnb / 3;
    setM1(mounths_1.toFixed(2));

    let mounths_2 = tokensbullbnb / 1.5;
    setM2(mounths_2.toFixed(2));

    let mounths_3 = tokensbullbnb / 1;
    setM3(mounths_3.toFixed(2));

    let dayly_receive =  mounths_1 / 60;
    setReceive(dayly_receive.toFixed(2));

    let dayly_retain = mounths_1 / 60;
    setRetain(dayly_retain.toFixed(2));

    let dayly = dayly_receive + dayly_retain;
    setDayli(dayly.toFixed(2));

    let receive_q = dayly_receive * 90;
    setReceiveQuaterly(receive_q.toFixed(2));

    let acum_q = dayly_retain * 90;
    setAccumulated(acum_q.toFixed(2));

    let total_apt = receive_q + acum_q;
    setTotal(total_apt.toFixed(2));
    

  }

  return (
    <div className="App" >
      <div className="app_desktop">
        <div className="container" >
            <div className="box shadow">
              <Header />
              <hr className="hr_line" />

              <Cuerpo 
                priceBLR    = {priceBLR}
                priceBNB    = {priceBNB}
                dollarBNB   = {dollarBNB}
                tokenBNB    = {tokenBNB}
                dollarBLR   = {dollarBLR}
                tokenBLR    = {tokenBLR}
                handleClick = {handleClick}
              />

              <Footer 
                bullBNB         = {bullBNB}
                receive         = {receive}
                retain          = {retain}
                m1              = {m1}
                m2              = {m2}
                m3              = {m3}
                dayli           = {dayli}
                receiveQuaterly = {receiveQuaterly}
                accumulated     = {accumulated}
                Total           = {Total}
              />

              <p className="text-white  text_footer">The last payment of 50% will be delivered in 3 equal parts every 15 days, and thus not affect the value of BullBNB.</p>
                         
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
