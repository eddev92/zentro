import React, { Component } from 'react';
import '../../../styles/publicacion.css';

const ContentPublication = ({ closeModalPublicacion }) => {
    return (
        <div className="main-publicaciones">
            <div className="row list-publicaciones">
            <div className="card card-image col-xs-12 col-md-5" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                    <div>
                        <h5 className="pink-text"><i className="fa fa-pie-chart"></i> Marketing</h5>
                        <h3 className="card-title pt-2"><strong>This is card title</strong></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                            Odit sed qui, dolorum!.</p>
                        <a className="btn btn-pink"><i className="fa fa-clone left"></i>Descargar</a>
                    </div>
                </div>
            </div>
            <div className="card card-image col-xs-12 col-md-5" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                    <div>
                        <h5 className="pink-text"><i className="fa fa-pie-chart"></i> Marketing</h5>
                        <h3 className="card-title pt-2"><strong>This is card title</strong></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                            Odit sed qui, dolorum!.</p>
                        <a className="btn btn-pink"><i className="fa fa-clone left"></i>Descargar</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="row list-publicaciones">
            <div className="card card-image col-xs-12 col-md-5" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                    <div>
                        <h5 className="pink-text"><i className="fa fa-pie-chart"></i> Marketing</h5>
                        <h3 className="card-title pt-2"><strong>This is card title</strong></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                            Odit sed qui, dolorum!.</p>
                        <a className="btn btn-pink"><i className="fa fa-clone left"></i>Descargar</a>
                    </div>
                </div>
            </div>
            <div className="card card-image col-xs-12 col-md-5" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                    <div>
                        <h5 className="pink-text"><i className="fa fa-pie-chart"></i> Marketing</h5>
                        <h3 className="card-title pt-2"><strong>This is card title</strong></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                            Odit sed qui, dolorum!.</p>
                        <a className="btn btn-pink"><i className="fa fa-clone left"></i>Descargar</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-md-12 text-center button-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModalPublicacion} data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    )
}

export default ContentPublication;
