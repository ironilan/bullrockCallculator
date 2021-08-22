import React from 'react'

export default function Header() {
    return (
        <header>
            <div className="row">
                <div className="app_movil_header_item col-6  col-md-2 col-lg ">
                    <img className="logo" src="https://cdn.animaapp.com/projects/611fa224948c08a7cf31c815/releases/611fa28199abbbe76c9af217/img/logo-blrs@1x.png" alt="" />
                </div>
                <div className="app_movil_header_item col-6  col-md-2 col-lg ">
                    <div className="content_idioma">
                        <button className="btn_active btn_idioma">EN</button>
                        <button className="btn_idioma">ES</button>
                    </div>
                </div>
                <div className="app_movil_caja col-lg col-md col-12 pdcol">
                    <div className="box_item_header">
                        <h4 className="text-white text-center">TOTAL BLRS AT 20%</h4>
                        <p className="text-white text-center">≈ 200 BILLIONS</p>
                    </div>
                </div>
                <div className="app_movil_caja col-lg col-md col-12 pdcol">
                    <div className="box_item_header">
                        <h4 className="text-white text-center">TOTAL BULLBNB AT 20%</h4>
                        <p className="text-white text-center">≈ 20 MILLIONS</p>
                    </div>
                </div>
                <div className="app_movil_caja col-lg col-md col-12 pdcol">
                    <div className="box_item_header">
                        <h4 className="text-white text-center">TOTAL STAKE BLRS</h4>
                        <p className="text-white text-center">≈ 10 BILLIONS</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
