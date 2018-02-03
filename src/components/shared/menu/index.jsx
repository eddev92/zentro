import React, { Component } from 'react';
import '../../../styles/menu.css';

class Menu extends Component{
    render() {
        return (
            <div className="main-menu">
                <div className="row">
                    <div className="col-md-1 item-menu" style={{textAlign: 'right'}}>
                        Inicio
                    </div>
                    <div className="col-md-2 item-menu">
                        Servicios
                    </div>
                    <div className="col-md-2 item-menu">
                        Capacitación
                    </div>
                    <div className="col-md-2 item-menu">
                        Publicaciones
                    </div>
                    <div className="col-md-3 item-menu">
                        Enlaces de interés
                    </div>
                    <div className="col-md-2 item-menu">
                        Contáctenos
                    </div>
                </div>
          </div>
        )
    }
}

export default Menu;
