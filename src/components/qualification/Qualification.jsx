import React from 'react'
import "./qualification.css"
import { useState } from 'react'


const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    };



    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">
                My personel journey
            </span>



            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className= "qualification__button  button--flexx"         >
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>


                    <div className= "qualification__button  button--flexx">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>



                <div className="qualification__sections">
                    <div className= "qualification__content qualification__content-active" >

                        <div className="qualification__data">


                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">
                                    Nigeria - Reworks Academy
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>




                        {/* <div className="qualification__data">

                         
                        

                            <div>
                                <h3 className="qualification__title">Economics</h3>
                                <span className="qualification__subtitle">
                                    Nigeria - Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div> */}




                        <div className="qualification__data">


                            <div>
                                <h3 className="qualification__title">Web Development Intern</h3>
                                <span className="qualification__subtitle">
                                    Nigeria - Reworks Academy
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - 20234
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>




                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">
                                Nigeria - Reworks Academy
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                    </div>



            
            
                    <div className="qualification__content qualification__content-active" >

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">
                                    Nigeria
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2023
                                </div>
                            </div>
                          

                        </div>



{/* 
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">
                                    Apple Inc - Nigeria
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2023
                                </div>
                            </div>

                        </div>







                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">
                                    Figma - Spain
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>
                         

                        </div> */}



                    </div>

                </div>
            </div>
        </section>
    )
}

export default Qualification