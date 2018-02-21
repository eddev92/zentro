import React, { Component } from 'react';
import '../../../styles/consultory-item.css';

const ConsultoryItem = ({ text, title, showIsos }) => (
    <section className="text-center text-lg-center">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5">
                            <div className="view overlay hm-white-slight rounded z-depth-2">
                            <img src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image for first version of blog listing"
                                className="img-fluid" />
                            <a>
                                <div className="mask"></div>
                            </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7 text">
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
