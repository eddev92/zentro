import React, { Component } from 'react';
import '../../../styles/contact-form.css';

class ContactForm extends Component{
    state = {
        active: 0
    }

    activeLabel = (index) => {
        const { active, indexInput } = this.state;
        console.log(index)
        this.setState({ active: index });
    }
    desactiveLabel = () => {
        const { active } = this.state;

        this.setState({ active: false });
    }
    render() {
        const { active } = this.state;

        return (
            <section className="form-dark col-md-5">
                    <div className="card card-image">
                        <div className="text-white rgba-stylish-strong z-depth-4 content-form">
                            <div className="text-center">
                            </div>
                            <div className="md-form">
                                <input type="text" id="Form-email5" className="form-control white-text" onBlur={this.desactiveLabel}/>
                                <label htmlFor="Form-email5" className={active === 1 ? 'active' : ''} onClick={this.activeLabel.bind(this, 1)}>Nombres y Apellidos</label>
                            </div>
                            <div className="md-form">
                                <input type="text" id="Form-email5" className="form-control white-text" />
                                <label htmlFor="Form-email5" className={active === 2 ? 'active' : ''} onClick={this.activeLabel.bind(this, 2)}>Email</label>
                            </div>
                            <div className="md-form">
                                <input type="text" id="Form-email5" className="form-control white-text" />
                                <label htmlFor="Form-email5" className={active === 3 ? 'active' : ''} onClick={this.activeLabel.bind(this, 3)}>Teléfono</label>
                            </div>
                            <div className="md-form">
                                <input type="text" id="Form-email5" className="form-control white-text" />
                                <label htmlFor="Form-email5" className={active === 4 ? 'active' : ''} onClick={this.activeLabel.bind(this, 4)}>Empresa o Institución</label>
                            </div>
                                <div className="text-center mb-3 col-md-12">
                                    <button type="button" className="btn btn-success btn-rounded z-depth-1">Contactar</button>
                                </div>

                        </div>
                    </div>
                </section>
        )
    }
}
export default ContactForm;
