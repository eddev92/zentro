import React, { Component } from 'react';
import '../../../styles/contact-form.css';
import sendMailServices from './../../../services/sendMail'

class ContactForm extends Component{
    state = {
        active: 0,
        model: {
            name: '',
            mail: '',
            enterprise: '',
            phone: ''
        },
        sendMail: false
    }
    handleChange = (key, event) => {
        const value = event.target.value;
        const path = key.split('.');
        const model = this.state.model;
        let item = model;
        for (let i = 0; i < path.length - 1; i++)	{
            item = item[path[i]];
        }
        item[path[path.length - 1]] = value;

        this.setState({model})
    }
    sendMail = () => {
        const {model, sendMail} = this.state;
        const newModel = {
            name: '',
            mail: '',
            enterprise: '',
            phone: '',
            message: ''
        }
        const service = new sendMailServices();

        service.sendMailContact(model)
       .then(response =>{
          console.log(model)
          console.log(response, 'envio contacto zentro.pe');
          this.setState({sendMail: true, model: newModel}, () => {
            this.changeMessage();
          });
      return response;
    })
    .catch(error => {
            alert('Error al enviar mensaje, inténtelo nuevamente.')
            console.log(error);
    });
    }
    changeMessage() {
     setTimeout(() => {
       return this.setState({sendMail: false})
      }, 3000);
    }
    activeLabel = (index) => {
        const { active, indexInput } = this.state;
        this.setState({ active: index });
    }
    desactiveLabel = () => {
        const { active } = this.state;

        this.setState({ active: false });
    }
    render() {
        const { active, model, sendMail } = this.state;

        return (
            <section className="form-dark col-xs-12 col-md-5">
                    <div className="card card-image">
                        <div className="z-depth-4 content-form">
                            <div className="text-center">
                            </div>
                            <div className="md-form">
                                <input type="text" id="name" class="form-control" value={model.name} onChange={this.handleChange.bind(this, 'name')} placeholder="Nombres y Apellidos" />
                            </div>
                            <div className="md-form">
                                <input type="text" class="form-control" id="mail" value={model.mail} onChange={this.handleChange.bind(this, 'mail')} placeholder="Email" />
                            </div>
                            <div className="md-form">
                                <input type="text" class="form-control" id="enterprise" value={model.enterprise} onChange={this.handleChange.bind(this, 'enterprise')} placeholder="Empresa o Institución" />
                            </div>
                            <div className="md-form">
                                <input type="text" class="form-control" id="phone" value={model.phone} onChange={this.handleChange.bind(this, 'phone')} placeholder="Teléfono" />
                            </div>
                            <div className="md-form">
                                <textarea type="text" class="form-control" id="message" value={model.message} onChange={this.handleChange.bind(this, 'message')} placeholder="Mensaje" />
                            </div>
                                <div className="text-center mb-3 col-md-12">
                                    <button type="button" className="btn btn-success btn-rounded z-depth-1" onClick={this.sendMail}>{sendMail ? 'Enviado' : 'Contactar'}</button>
                                </div>

                        </div>
                    </div>
                </section>
        )
    }
}
export default ContactForm;
