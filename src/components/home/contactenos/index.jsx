import React, { Component } from 'react';
import '../../../styles/contactenos.css';
import ContactForm from '../../../components/shared/contact-form';

class Contactenos extends Component{
    render() {
        return (
            <div className="main-contactenos">
            <img src="images/contactos.jpg" alt=""/>
            <div className="row">
            <p className="col-xs-12 col-md-6 message-contact">Escríbenos y nos pondremos en contacto<br/> contigo lo mas pronto posible.</p>
            <p className="col-xs-12 col-md-6 message-contact2 ">Telefonos: 975 400 169<br/>Email: informes@zentro.pe</p>
            <ContactForm />
                </div>
            </div>
        )
    }
}

export default Contactenos;
