import React, { createContext, useState } from "react";
import traslEn from '../data/en.json'
import traslEs from '../data/es.json'

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    /******************************* */


    const priceBLR = '0.00003';
    const priceBNB = '0.3';
    const [btnEn, setBtnEn] = useState(null)
    const [btnEs, setBtnEs] = useState(null)
    
    const [languaje, setLanguaje] = useState(traslEn)

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
        setReceive(dayly_receive.toFixed(3));
    
        let dayly_retain = mounths_1 / 60;
        setRetain(dayly_retain.toFixed(3));
    
        let dayly = dayly_receive + dayly_retain;
        setDayli(dayly.toFixed(2));
    
        let receive_q = dayly_receive * 90;
        setReceiveQuaterly(receive_q.toFixed(2));
    
        let acum_q = dayly_retain * 90;
        setAccumulated(acum_q.toFixed(2));
    
        let total_apt = receive_q + acum_q;
        setTotal(total_apt.toFixed(2));
        
    
      }


    const idioma = (lang) => {
        
       
        if(lang === 'en')
        {
            setLanguaje(traslEn);
            setBtnEs(null);
            setBtnEn('btn_active');
            console.log(languaje);
        }else{
            setLanguaje(traslEs);
            setBtnEn(null);
            setBtnEs('btn_active');
        }
    }

    /************************************** */


    return (
        <DataContext.Provider value={{
            languaje,
            btnEn,
            btnEs,
            priceBLR,
            priceBNB,
            dollarBNB,
            setDollarBNB,
            tokenBNB,
            setTokenBNB,
            dollarBLR,
            setDollarBLR,
            tokenBLR,
            setTokenBLR,
            bullBNB,
            setBullBNB,
            receive,
            setReceive,
            retain,
            setRetain,
            m1,
            setM1,
            m2,
            setM2,
            m3,
            setM3,
            dayli,
            setDayli,
            receiveQuaterly,
            setReceiveQuaterly,
            accumulated,
            setAccumulated,
            Total,
            setTotal,
            handleClick,
            idioma


        }}>
            { children }
        </DataContext.Provider>
    )
}
