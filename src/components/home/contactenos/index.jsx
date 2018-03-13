import React, { Component } from 'react';
import '../../../styles/contactenos.css';
import ContactForm from '../../../components/shared/contact-form';

class Contactenos extends Component{
    render() {
        return (
            <div className="main-contactenos">
            <img src="images/contactos.jpg" alt=""/>
            <div className="row">
            <p className="col-xs-12 col-md-6 message-contact">Escríbenos y nos pondremos en contacto<br/> contigo lo más pronto posible.</p>
            <p className="col-xs-12 col-md-6 message-contact2">Teléfono: 975 400 169<br/>Email: <a href="mailto: informes@zentro.pe">informes@zentro.pe</a></p>
            <ContactForm />
                </div>
            </div>
        )
    }
}

export default Contactenos;
