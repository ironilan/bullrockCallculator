import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataContext'

export default function Cuerpo() {


    const {priceBNB, priceBLR, tokenBNB, dollarBLR, dollarBNB, tokenBLR, handleClick, languaje} = useContext(DataContext)


    const [data, setData] = useState(null)

    const handleInputChange = (event) => {       

        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    //console.log(data);

    return (
        <div className="row">
            <div className="col-lg-6 col-12">
                <div className="contenedor_calculate">
                    <img alt="" className="titulo_movil" src={languaje.body[0].titulo_img_movil} />
                    <img alt="logo respoinsive" className="titulo_tablet" src={languaje.body[0].titulo_img_tablet}/>
                    <img className="titulo_normal" src={languaje.body[0].titulo_img_desktop} alt="" />
                    <div className="box_input_token">
                        <h4 className="text-white font-bold text-uppercase">{languaje.body[0].titulo_calc}</h4>
                        <div className="content_calcultor ">
                            <div className="input_token">
                                
                                <input className="input_style" placeholder="10000000" type="number" name="tokens"  onChange={handleInputChange} />
                            </div>
                            <button className="text-white text-uppercase btn_calculate" data-token={data?.tokens}  onClick={handleClick}>Calculate</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 colpaleft text-center">
                <div className="content_card">
                    <h3 className="text-white title_blr bold_title_blr">{languaje.body[0].titulo1}</h3>
                    <div className="row">
                        <div className="col-lg  col-md col-12 pdcol">
                            <div className="card_blr">
                                <h5 className="text-white">{languaje.body[0].subtitulo1}</h5>
                                <p className="text-white">??? {priceBLR}</p>
                            </div>
                        </div>
                        <div className="col-lg  col-md col-12 pdcol">
                            <div className="card_blr">
                                <h5 className="text-white">{languaje.body[0].subtitulo2}</h5>
                                <p className="text-white">{dollarBLR}</p>
                            </div>
                        </div>
                        <div className="col-lg  col-md col-12 pdcol">
                            <div className="card_blr">
                                <h5 className="text-white">{languaje.body[0].subtitulo3}</h5>
                                <p className="text-white">{tokenBLR}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content_card mt-4">
                    <h3 className="text-white title_blr bold_title_blr">{languaje.body[0].titulo2}</h3>
                    <div className="row">
                        <div className="col-lg  col-md col-12 pdcol">
                            <div className="card_blr">
                                <h5 className="text-white">{languaje.body[0].subtitulo4}</h5>
                                <p className="text-white">??? {priceBNB}</p>
                            </div>
                        </div>
                        <div className="col-lg  col-md col-12 pdcol">
                            <div className="card_blr">
                                <h5 className="text-white">{languaje.body[0].subtitulo5}</h5>
                                <p className="text-white">{dollarBNB}</p>
                            </div>
                        </div>
                        <div className="col-lg  col-md col-12 pdcol">
                            <div className="card_blr">
                                <h5 className="text-white">{languaje.body[0].subtitulo6}</h5>
                                <p className="text-white">{tokenBNB}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
