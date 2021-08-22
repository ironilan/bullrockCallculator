import React from 'react'

export default function Cuerpo() {
    return (
        <div className="row">
            <div className="col-lg-6 col-12">
                <div className="contenedor_calculate">
                    <img alt="" className="titulo_movil" src="https://cdn.animaapp.com/projects/611fa224948c08a7cf31c815/releases/611fa28199abbbe76c9af217/img/calculate-blrs-90-day-stake-profit-2@2x.svg" />
                    <img alt="logo respoinsive" className="titulo_tablet" src="https://cdn.animaapp.com/projects/611fa224948c08a7cf31c815/releases/611fa28199abbbe76c9af217/img/calculate-blrs-90-day-stake-profit-1@2x.svg"/>
                    <img className="titulo_normal" src="https://cdn.animaapp.com/projects/611fa224948c08a7cf31c815/releases/611fa28199abbbe76c9af217/img/calculate-blrs-90-day-stake-profit@2x.svg" alt="" />
                    <div className="box_input_token">
                        <h4 className="text-white font-bold text-uppercase">Token BLRS</h4>
                        <div className="content_calcultor ">
                            <div className="input_token">
                                <img src="https://cdn.animaapp.com/projects/611fa224948c08a7cf31c815/releases/611fa28199abbbe76c9af217/img/base-1@2x.svg" alt="" />
                                <input className="input_style" placeholder="10000000" type="number"  />
                            </div>
                            <button className="text-white text-uppercase btn_calculate">Calculate</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 colpaleft text-center">
                <div className="content_card">
                    <h3 className="text-white title_blr bold_title_blr">BULLROCK</h3>
                    <div className="row">
                        <div className="col-lg  col-md col-12 pdcol">
                            <div className="card_blr">
                                <h5 className="text-white">PRICE</h5>
                                <p className="text-white">≈ 0.00003</p>
                            </div>
                        </div>
                        <div className="col-lg  col-md col-12 pdcol">
                            <div className="card_blr">
                                <h5 className="text-white">DOLLARS</h5>
                                <p className="text-white">300,000</p>
                            </div>
                        </div>
                        <div className="col-lg  col-md col-12 pdcol">
                            <div className="card_blr">
                                <h5 className="text-white">TOKENS</h5>
                                <p className="text-white">10,000,000,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content_card mt-4">
                    <h3 className="text-white title_blr bold_title_blr">BULLBNB</h3>
                    <div className="row">
                        <div className="col-lg  col-md col-12 pdcol">
                            <div className="card_blr">
                                <h5 className="text-white">PRICE</h5>
                                <p className="text-white">≈ 0.3</p>
                            </div>
                        </div>
                        <div className="col-lg  col-md col-12 pdcol">
                            <div className="card_blr">
                                <h5 className="text-white">TOKENS</h5>
                                <p className="text-white">10,000,000</p>
                            </div>
                        </div>
                        <div className="col-lg  col-md col-12 pdcol">
                            <div className="card_blr">
                                <h5 className="text-white">DOLLARS</h5>
                                <p className="text-white">30,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
