import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

export default function Footer() {

    const {bullBNB, receive, retain, m1, m2, m3, dayli, receiveQuaterly, accumulated, Total, languaje} = useContext(DataContext)

    return (
        <div className="row mt-4  app_content_respo">
            <div className="col-12">
            <div className="desktop_hide ">
                <p className="text-white">{languaje.footer[0].text_for_movil}</p>
                <div className="card_footer_result mr-4px">
                    <h5 className="text-white">{languaje.footer[0].caja_1}</h5>
                    <p className="text-white">{bullBNB}</p>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-12 col-lg">
                <div className="content_results text-center">
                    <h4 className="title_footer_blr text-white">{languaje.footer[0].titulo_1}</h4>
                    <div className="row">
                        <div className=" movil_hide col ">
                            <div className="card_footer_result mr-4px">
                                <h5 className="text-white">{languaje.footer[0].caja_1}</h5>
                                <p className="text-white">{bullBNB}</p>
                            </div>
                        </div>
                        <div className="desktop_pd_0 col-md col-lg col-6 ">
                            <div className="card_footer_result mr-4px">
                                <h5 className="text-white">{languaje.footer[0].caja_2}</h5>
                                <p className="text-white">{receive}</p>
                            </div>
                        </div>
                        <div className="desktop_pd_0 col-md col-lg col-6 ">
                            <div className="card_footer_result mr-4px">
                                <h5 className="text-white">{languaje.footer[0].caja_3}</h5>
                                <p className="text-white">{retain}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-12 col-lg">
                <div className="content_results  w20rem text-center">
                    <h4 className="title_footer_blr text-white">{languaje.footer[0].titulo_2}</h4>
                    <div className="row">
                        <div className="card_footer_result col mr-4px">
                            <h5 className="text-white">1</h5>
                            <p className="text-white">{m1}</p>
                        </div>
                        <div className="card_footer_result col mr-4px">
                            <h5 className="text-white">2</h5>
                            <p className="text-white">{m2}</p>
                        </div>
                        <div className="card_footer_result col mr-4px">
                            <h5 className="text-white">3</h5>
                            <p className="text-white">{m3}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
                <div className="content_results text-center ">
                   
                    <div className="row pt_27px pd_responsive_tablet">
                        <div className=" col-md col-lg col-6 desktop_pd_0 ">
                            <div className="card_footer_result mr-4px">
                                <h5 className="text-white">{languaje.footer[0].caja_7}</h5>
                                <p className="text-white">{dayli}</p>
                            </div>
                        </div>
                        <div className=" col-md col-lg col-6 desktop_pd_0  ">
                            <div className="card_footer_result mr-4px">
                                <h5 className="text-white fs-10px mb_5px">{languaje.footer[0].caja_8}</h5>
                                <p className="text-white">{receiveQuaterly}</p>
                            </div>
                        </div>
                        <div className=" col-md col-lg col-6 desktop_pd_0  ">
                            <div className="card_footer_result  mr-4px">
                                <h5 className="text-white fs-10px mb_5px">{languaje.footer[0].caja_9}</h5>
                                <p className="text-white">{accumulated}</p>
                            </div>
                        </div>
                        <div className=" col-md col-lg col-6 desktop_pd_0  ">
                            <div className="card_footer_result  mr-4px">
                                <h5 className="text-white fs-10px mb_5px">{languaje.footer[0].caja_10}</h5>
                                <p className="text-white">{Total}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <p className="text-white  text_footer mt-4">{languaje.footer[0].texto_footer}</p>
        </div>
    )
}
