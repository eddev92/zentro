import React, { Component } from 'react';
import '../../../styles/contactenos.css';
import ContactForm from '../../../components/shared/contact-form';

class Contactenos extends Component{
    render() {
        return (
            <div className="main-contactenos" style={{backgroundImage: 'url(images/contactos.jpg)'}}>
            <div className="row">
            <div className="col-xs-12 col-md-5 main-info-cont">
                <p className="col-xs-12 col-md-12 message-contact">Escríbenos y nos pondremos en contacto<br/> contigo lo más pronto posible.</p>
                <p className="col-xs-12 col-md-12 message-contact2">Teléfono: 980 568 753<br/>Email: <a href="mailto: informes@zentro.pe">informes@zentro.pe</a></p>
            </div>
            <ContactForm />
                </div>
            </div>
        )
    }
}

export default Contactenos;
