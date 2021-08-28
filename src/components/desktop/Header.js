import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'

export default function Header() {

    const {idioma, btnEn, btnEs, languaje} = useContext(DataContext)

    useEffect(() => {
        idioma('en');
    }, [])
    
    return (
        <header>
            <div className="row">
                <div className="app_movil_header_item col-6  col-md-2 col-lg ">
                    <img className="logo" src="https://cdn.animaapp.com/projects/611fa224948c08a7cf31c815/releases/611fa28199abbbe76c9af217/img/logo-blrs@1x.png" alt="" />
                </div>
                <div className="app_movil_header_item col-6  col-md-2 col-lg ">
                    <div className="content_idioma">
                        <button className={ `btn_idioma btn_en ${btnEn}  ` } onClick={()=> idioma('en')}>EN</button>
                        <button className={ `btn_idioma btn_es  ${btnEs}` } onClick={()=> idioma('es')}>ES</button>
                    </div>
                </div>
                <div className="app_movil_caja col-lg col-md col-12 pdcol">
                    <div className="box_item_header">
                        <h4 className="text-white text-center">{languaje.header[0].titulo1}</h4>
                        <p className="text-white text-center">≈ 200 BILLIONS</p>
                    </div>
                </div>
                <div className="app_movil_caja col-lg col-md col-12 pdcol">
                    <div className="box_item_header">
                        <h4 className="text-white text-center">{languaje.header[0].titulo2}</h4>
                        <p className="text-white text-center">≈ 20 MILLIONS</p>
                    </div>
                </div>
                <div className="app_movil_caja col-lg col-md col-12 pdcol">
                    <div className="box_item_header">
                        <h4 className="text-white text-center">{languaje.header[0].titulo3}</h4>
                        <p className="text-white text-center">≈ 100,000</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
