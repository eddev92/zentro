import React, { Component } from 'react';
import '../../../styles/consultory-item.css';
import CarouseImages from '../../../components/shared/carousel-images';

const ConsultoryItem = ({ text, title, showIsos, active }) => (
    
    <section className="text-center text-lg-center">
                    <div className="row">
                        {/* <div className="col-lg-7 col-xl-7 col-md-7">
                            <div className="view overlay hm-white-slight rounded z-depth-2">
                            <CarouseImages/>
                            <a>
                                <div className="mask"></div>
                            </a>
                            </div>
                        </div> */}
                        <div className="col-sm-5 col-lg-5 col-xl-5 text">
                            <h3 className="mb-4 font-bold dark-grey-text">
                            <strong>{title}</strong>
                            </h3>
                            <p>{text}</p>

                            {(showIsos) && <div className="isos">
                                <a className="btn btn-success btn-md mb-3">ISO 9000</a>
                                <a className="btn btn-success btn-md mb-3">ISO 17025</a>
                                <a className="btn btn-success btn-md mb-3">ISO 17020</a>
                            </div>}
                        </div>
                    </div>
            </section>
);

export default ConsultoryItem;
