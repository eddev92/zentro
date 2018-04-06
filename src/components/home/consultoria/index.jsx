import React, { Component } from 'react';
import '../../../styles/consultoria.css';
import ConsultoryItem from '../../../components/shared/consultory-item';
import { CONSULTY_ITEM_1_CONTENT,
        CONSULTY_ITEM_2_CONTENT,
        CONSULTY_ITEM_3_CONTENT,
        CONSULTY_ITEM_4_CONTENT
} from '../../../utils/constants';
import CarouseImages from '../../../components/shared/carousel-images';

class Consultoria extends Component{
    state = {
        active: 0
    }
    selectTab = (index) => {
        if(index > 0) {
            this.setState({index: 0})
        }
        this.setState({active: index})
    }
    render() {
        const { active } = this.state;
        const showIsos = true;

        return (
            <div className="main-consultoria">
                    <ul class="nav nav-tabs nav-justified">
                        <li class="nav-item">
                            <a className={active === 1 ? 'nav-link active show' : 'nav-link'} data-toggle="tab" role="tab" id={`element${active}`} onClick={this.selectTab.bind(this, 1)}>Tratamiento de aguas residuales</a>
                        </li>
                        <li class="nav-item">
                            <a className={active === 2 ? 'nav-link active show' : 'nav-link'} data-toggle="tab" role="tab" style={{padding: '19px'}}  id={`element${active}`} onClick={this.selectTab.bind(this, 2)}>Implementación de métodos oficiales de análisis químicos (APHA, EPA, ISO, etc.)</a>
                        </li>
                        <li class="nav-item">
                            <a className={active === 3 ? 'nav-link active show' : 'nav-link'} data-toggle="tab" role="tab" id={`element${active}`} onClick={this.selectTab.bind(this, 3)}>Desarrollo de métodos de análisis</a>
                        </li>
                        <li class="nav-item">
                            <a className={active === 4 ? 'nav-link active show' : 'nav-link'} data-toggle="tab" role="tab" id={`element${active}`} onClick={this.selectTab.bind(this, 4)}>Auditorías internas</a>
                        </li>
                    </ul>
                <div class="tab-content card row">
                {(!active) && <div className='tab-pane fade in active show' id="panel1" role="tabpanel">
                        <br />
                        <div className="select-consulty container">
                        <h1>SELECCIONE ALGÚN TIPO DE CONSULTORÍA</h1>
                        </div>
                    </div>}
                    <CarouseImages active={active}/>
                    <div className={(active === 1) ? 'tab-pane fade in active show' : 'tab-pane fade'} role="tabpanel">
                        <br />
                        <ConsultoryItem text={CONSULTY_ITEM_1_CONTENT} title="TRATAMIENTOS DE AGUAS RESIDUALES" active={active}/>
                    </div>
                    <div className={(active === 2) ? 'tab-pane fade in active show' : 'tab-pane fade'} role="tabpanel">
                        <br/>
                        <ConsultoryItem text={CONSULTY_ITEM_2_CONTENT} title="IMPLEMENTACIÓN DE MÉTODOS OFICIALES DE ANÁLISIS QUÍMICOS" active={active}/>
                        <p></p>
                    </div>
                    <div className={(active === 3) ? 'tab-pane fade in active show' : 'tab-pane fade'} role="tabpanel">
                        <br />
                        <ConsultoryItem text={CONSULTY_ITEM_3_CONTENT} title="DESARROLLO DE MÉTODOS DE ANÁLISIS" />
                    </div>
                    <div className={(active === 4) ? 'tab-pane fade in active show' : 'tab-pane fade'} role="tabpanel">
                        <br />
                        <ConsultoryItem text={CONSULTY_ITEM_4_CONTENT} title="AUDITORÍAS INTERNAS" showIsos={showIsos} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Consultoria;

