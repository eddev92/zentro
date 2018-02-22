import React, { Component } from 'react';
import '../../../styles/contactenos.css';
import ContactForm from '../../../components/shared/contact-form';

class Contactenos extends Component{
    render() {
        return (
            <div className="main-contactenos">
            <img src="images/contactos.jpg" alt=""/>
            <div className="row">
            <p className="col-md-6">Escríbenos y nos pondremos en contacto<br/> contigo lo mas pronto posible.</p>
            <ContactForm />
                </div>
            </div>
        )
    }
}

export default Contactenos;
