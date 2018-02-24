import React, { Component } from 'react';
import '../../../styles/enlace.css';

const Enlace = () => {
    const row01 = [
        {
            title: 'American Chemical Society',
            url: 'https://www.acs.org/content/acs/en.html',
            textButtom: 'IR AL ENLACE'
        },
        {
            title: 'Soc qca del Perú',
            url: 'http://sqperu.org.pe/s',
            textButtom: 'IR AL ENLACE'
        }
    ]
    const row02 = [
        {
            title: 'Colegio Químico del Perú',
            url: 'http://www.cqpperu.org/',
            textButtom: 'IR AL ENLACE'
        },
        {
            title: 'IUPAC',
            url: 'https://iupac.org/',
            textButtom: 'IR AL ENLACE'
        },
        {
            title: 'Environmental Protection Agency',
            url: 'https://www.epa.gov/',
            textButtom: 'IR AL ENLACE'
        }
    ]
    const row1 = row01.map(e => 
        <div class="card text-center col-xs-12 col-sm-6 col-md-6" style={{width: '22rem', boxShadow: 'none'}}>
            <div class="card-header success-color white-text">
                Featured
            </div>
            <div class="card-body">
                <h4 class="card-title">{e.title}</h4>
                <a class="btn btn-success btn-sm" href={e.url} target="_blank">{e.textButtom}</a>
            </div>
            <div class="card-footer text-muted success-color white-text">
            </div>
        </div>
    )
    const row2 = row02.map(e => 
        <div class="card text-center col-xs-12 col-sm-12 col-md-4" style={{width: '22rem', boxShadow: 'none', marginBottom: 25}}>
            <div class="card-header success-color white-text">
                Featured
            </div>
            <div class="card-body">
                <h4 class="card-title">{e.title}</h4>
                <a class="btn btn-success btn-sm" href={e.url} target="_blank">{e.textButtom}</a>
            </div>
            <div class="card-footer text-muted success-color white-text">
            </div>
        </div>
    )
    return (
        <div>
         <div className="row main-enlace">
            {row1}
        </div>
        <div className="row main2">
            {row2}
        </div>
       </div>

        
    )
}

export default Enlace;
