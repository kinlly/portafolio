import React from 'react'

function Experience() {
    return (
        <div className="body__experience">
            <div className="experience__container">
                <h2>Experience</h2>
                <div className="experience__skills">
                    <div className="experienceSkill">
                        <div className="cardExperience">
                            <img src="/images/cinderella.png" alt="experience_cinderella"/>
                            <div className="optionCardSKill">
                                <span> Founder & CTO</span>
                            </div>
                            <div className="optionCardSKillYears">
                                <span> 2 YEARS</span>
                            </div>
                        </div>
                    </div>
                    <div className="experienceSkill">
                        <div className="cardExperience">
                            <img src="/images/travelland.png"  alt="experience_travelland" />
                            <div className="optionCardSKill">
                                <span> Full Stack Dev</span>
                            </div>
                            <div className="optionCardSKillYears">
                                <span> 1 YEAR</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="experienceSkill">
                        <div className="cardExperience">
                            <img src="/images/wemonetize.png"  alt="experience_wemonetize" />
                            <div className="optionCardSKill">
                                <span> Chief Depart.</span>
                            </div>
                            <div className="optionCardSKillYears">
                                <span> 2 YEARS</span>
                            </div>
                        </div>
                    </div>
                    <div className="experienceSkill" id="desk_display">
                        <div className="cardExperience">
                            <img src="/images/csdi.png"  alt="experience_csdi" />
                            <div className="optionCardSKill">
                                <span> CTO </span>
                            </div>
                            <div className="optionCardSKillYears">
                                <span> 9 MONTHS</span>
                            </div>
                        </div>
                    </div>
                    <div className="experienceSkill" id="desk_display">
                        <div className="cardExperience">
                            <img src="/images/tuto4pc.png" alt="experience_tuto4pc" />
                            <div className="optionCardSKill">
                                <span>Programmer</span>
                            </div>
                            <div className="optionCardSKillYears">
                                <span> 6 MONTHS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
