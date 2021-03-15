import React from 'react'
import FadeInWhenVisible from '../hooks/useFadeInWhenVisible';

function Extras() {
    return (
        <div className="body__extras">
            <div className="extras__container">
                <FadeInWhenVisible><h2>Extras</h2></FadeInWhenVisible>
                <div className="extras__skills">
                    <div className="extrasSkill">
                        <FadeInWhenVisible>
                            <div className="cardExtras">
                                <span><p>Email Marketing</p></span>
                                <img src="/images/task_mail.png" alt="extras_taskmail" />
                                <div className="logoCard">
                                    <img src="/images/travelland.png" alt="extras_traveland" />
                                </div>
                                <div className="extrasCard">
                                    <img src="/images/html5circle.png" alt="extras_skill_html" />
                                    <img src="/images/csscircle.png" alt="extras_skill_css" />
                                    <img src="/images/mailchimpcircle.png" alt="extras_skill_mailchimp" />
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                    <div className="extrasSkill" id="desk_display">
                        <FadeInWhenVisible>
                            <div className="cardExtras">
                                <span><p>Ingenico Flex CheckOut</p></span>
                                <img src="/images/extra_custompayment.png" alt="extras_flex" />
                                <div className="logoCard">
                                    <img src="/images/cinderella.png" alt="extras_cinderella" />
                                </div>
                                <div className="extrasCard">
                                    <img src="/images/html5circle.png" alt="extras_skill_html" />
                                    <img src="/images/csscircle.png" alt="extras_skill_css" />
                                    <img src="/images/jscircle.png" alt="extras_skill_js" />
                                    <img src="/images/phpcircle.png" alt="extras_skill_php" />
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                    <div className="extrasSkill">
                        <FadeInWhenVisible>
                            <div className="cardExtras">
                                <span><p>Control Business Panel</p></span>
                                <img src="/images/extra_crm.png" alt="extras_crm" />
                                <div className="logoCard">
                                    <img src="/images/cinderella.png" alt="extras_cinderella" />
                                </div>
                                <div className="extrasCard">
                                    <img src="/images/html5circle.png" alt="extras_skill_html" />
                                    <img src="/images/bootstrapcircle.png" alt="extras_skill_bootstrap" />
                                    <img src="/images/jscircle.png" alt="extras_skill_js" />
                                    <img src="/images/phpcircle.png" alt="extras_skill_php" />
                                    <img src="/images/jquerycircle.png" alt="extras_skill_jquery" />
                                    <img src="/images/ajaxcircle.png" alt="extras_skill_ajax" />
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Extras
