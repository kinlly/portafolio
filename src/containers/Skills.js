import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function Skills() {
    const history = useHistory();

    return (
        <div className="body__skills">
            <div className="skills__container">
                <h2>Skills</h2>
                <div className="app__skills">
                    <div className="itemSkill">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <span className="span__card">This website</span>
                            <div className="cardSkill">
                                <img src="/images/html5circle.png" className="imgCard" alt="skills_hmtl5" />
                            </div>
                            <div className="showCardTitle"><p>HTML</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill" >
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <span className="span__card">This website</span>
                            <div className="cardSkill">
                                <img src="/images/csscircle.png" className="imgCard" alt="skills_css" />
                            </div>
                            <div className="showCardTitle"><p>CSS</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                        <span className="span__card">This website</span>
                            <div className="cardSkill">
                                <img src="/images/jscircle.png" className="imgCard" alt="skills_js" />
                            </div>
                            <div className="showCardTitle"><p>JavaScript</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <div className="cardSkill">
                                <img src="/images/phpcircle.png" className="imgCard" alt="skills_php" />
                            </div>
                            <div className="showCardTitle"><p>PHP</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <div className="cardSkill">
                                <img src="/images/mysql.png" className="imgCard" alt="skills_mysql" />
                            </div>
                            <div className="showCardTitle"><p>MySQL</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <div className="cardSkill">
                                <img src="/images/wordpress.png" className="imgCard" alt="skills_wordpress" />
                            </div>
                            <div className="showCardTitle"><p>Wordpress</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <span className="span__card">This website</span>
                            <div className="cardSkill">
                                <img src="/images/reactcircle.png" className="imgCard" alt="skills_react" />
                            </div>
                            <div className="showCardTitle"><p>React</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <div className="cardSkill">
                                <img src="/images/symfony.png" className="imgCard" alt="skills_symfony" />
                            </div>
                            <div className="showCardTitle"><p>Symfony</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <div className="cardSkill">
                                <img src="/images/cpanelcircle.png" className="imgCard" alt="skills_cpanel" />
                            </div>
                            <div className="showCardTitle"><p>cPanel</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <div className="cardSkill">
                                <img src="/images/bootstrapcircle.png" className="imgCard" alt="skills_bootstrap" />
                            </div>
                            <div className="showCardTitle"><p>Bootstrap</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <div className="cardSkill">
                                <img src="/images/github.png" className="imgCard" alt="skills_github" />
                            </div>
                            <div className="showCardTitle"><p>GitHUB</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <div className="cardSkill">
                                <img src="/images/awscircle.png" className="imgCard" alt="skills_aws" />
                            </div>
                            <div className="showCardTitle"><p>AmazonWS</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <div className="cardSkill">
                                <img src="/images/selenium.png" className="imgCard" alt="skills_selenium" />
                            </div>
                            <div className="showCardTitle"><p>Selenium</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <span className="span__card">This website </span>
                            <div className="cardSkill">
                                <img src="/images/firebase.png" className="imgCard" alt="skills_firebase" />
                            </div>
                            <div className="showCardTitle"><p>Firebase</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <div className="cardSkill">
                                <img src="/images/sem.png" className="imgCard" alt="skills_seo-sem" />
                            </div>
                            <div className="showCardTitle"><p>SEO/SEM</p></div>
                        </motion.div>
                    </div>
                    <div className="itemSkill" id="desk_display">
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
                            <div className="cardSkill">
                                <img src="/images/insights.png" className="imgCard" alt="skills_insights" />
                            </div>
                            <div className="showCardTitle"><p>PageSpeed</p></div>
                        </motion.div>
                    </div>
                </div>
                <a onClick={() => history.push("/skills")}>more skills & details
                    <motion.div animate={{  x: [0, -10], opacity: 1, transition: { yoyo: Infinity, ease: "easeIn" } }} >
                        <KeyboardBackspaceIcon />
                    </motion.div> </a>
            </div>
        </div>
    )
}

export default Skills
