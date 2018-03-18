import React, { Component } from 'react';
import '../../../styles/publicacion.css';

import PublicacionesServices from '../../../services/publicaciones';

class Publicacion extends Component {
    state = {
        publicaciones: []
    }
    componentDidMount() {
        this.loadPublicaciones();
    }
    loadPublicaciones() {
        const service = new PublicacionesServices();
        service.getPublicaciones()
            .then(res => {
                this.setState({ publicaciones: res })
            }).catch(error => {
                console.log(error)
            })
    }
    renderItems = () => {
        const result = this.state.publicaciones.map(item => 
            
                    <div className="card card-image col-xs-12 col-md-6">
                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                            <div>
                                {item.title && <h3 className="card-title pt-2"><b>{item.title}</b></h3>}
                                <p>{item.content}</p>
                                <strong>{item.authors}</strong>
                                <a href={item.url} download={item.url} className="btn btn-pink btn-download">Descargar</a>
                                {item.date && <h5 className="pink-text">{item.date}</h5>}
                            </div>
                        </div>
                    </div>
        )
        return result;
    }
    render() {
        const { closeModalPublicacion } = this.props;
        return (
            <div className="main-publicaciones">
                <div className="row list-publicaciones">
                    {this.renderItems()}
                </div>
                <div className="col-md-12 text-center button-footer">
                </div>
            </div>
        )
    }
}

export default Publicacion;

