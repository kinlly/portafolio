import React from 'react';
import { useHistory } from 'react-router-dom'

function Skills() {
    const history = useHistory();
    return (
        <div className="body__skills">
            <div className="skills__container">
                <h2>Skills</h2>
                <div className="app__skills">
                    <div className="itemSkill">
                        <span className="span__card">This website</span>
                        <div className="cardSkill">
                            <img src="/images/html5circle.png" className="imgCard" alt="skills_hmtl5" />
                        </div>
                        <div className="showCardTitle"><p>HTML</p></div>
                    </div>
                    <div className="itemSkill" >
                        <span className="span__card">This website</span>
                        <div className="cardSkill">
                            <img src="/images/csscircle.png" className="imgCard" alt="skills_css" />
                        </div>
                        <div className="showCardTitle"><p>CSS</p></div>
                    </div>
                    <div className="itemSkill">
                        <span className="span__card">This website</span>
                        <div className="cardSkill">
                            <img src="/images/jscircle.png" className="imgCard" alt="skills_js"  />
                        </div>
                        <div className="showCardTitle"><p>JavaScript</p></div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <div className="cardSkill">
                            <img src="/images/phpcircle.png" className="imgCard" alt="skills_php"  />
                        </div>
                        <div className="showCardTitle"><p>PHP</p></div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <div className="cardSkill">
                            <img src="/images/mysql.png" className="imgCard" alt="skills_mysql"  />
                        </div>
                        <div className="showCardTitle"><p>MySQL</p></div>
                    </div>
                    <div className="itemSkill">
                        <div className="cardSkill">
                            <img src="/images/wordpress.png" className="imgCard" alt="skills_wordpress"  />
                        </div>
                        <div className="showCardTitle"><p>Wordpress</p></div>
                    </div>
                    <div className="itemSkill">
                        <span className="span__card">This website</span>
                        <div className="cardSkill">
                            <img src="/images/reactcircle.png" className="imgCard" alt="skills_react"  />
                        </div>
                        <div className="showCardTitle"><p>React</p></div>
                    </div>
                    <div className="itemSkill">
                        <div className="cardSkill">
                            <img src="/images/symfony.png" className="imgCard" alt="skills_symfony"  />
                        </div>
                        <div className="showCardTitle"><p>Symfony</p></div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <div className="cardSkill">
                            <img src="/images/cpanelcircle.png" className="imgCard" alt="skills_cpanel"  />
                        </div>
                        <div className="showCardTitle"><p>cPanel</p></div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <div className="cardSkill">
                            <img src="/images/bootstrapcircle.png" className="imgCard" alt="skills_bootstrap"  />
                        </div>
                        <div className="showCardTitle"><p>Bootstrap</p></div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <div className="cardSkill">
                            <img src="/images/github.png" className="imgCard" alt="skills_github"  />
                        </div>
                        <div className="showCardTitle"><p>GitHUB</p></div>
                    </div>
                    <div className="itemSkill">
                        <div className="cardSkill">
                            <img src="/images/awscircle.png" className="imgCard" alt="skills_aws"  />
                        </div>
                        <div className="showCardTitle"><p>AmazonWS</p></div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <div className="cardSkill">
                            <img src="/images/selenium.png" className="imgCard" alt="skills_selenium"  />
                        </div>
                        <div className="showCardTitle"><p>Selenium</p></div>
                    </div>
                    <div className="itemSkill">
                        <span className="span__card">This website </span>
                        <div className="cardSkill">
                            <img src="/images/firebase.png" className="imgCard" alt="skills_firebase"  />
                        </div>
                        <div className="showCardTitle"><p>Firebase</p></div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <div className="cardSkill">
                            <img src="/images/sem.png" className="imgCard" alt="skills_seo-sem"  />
                        </div>
                        <div className="showCardTitle"><p>SEO/SEM</p></div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <div className="cardSkill">
                            <img src="/images/insights.png" className="imgCard" alt="skills_insights"  />
                        </div>
                        <div className="showCardTitle"><p>PageSpeed</p></div>
                    </div>
                </div>
                <a onClick={()=> history.push("/skills")}>more skills & details</a>
            </div>
        </div>
    )
}

export default Skills
