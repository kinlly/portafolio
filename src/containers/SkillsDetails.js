import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router-dom' 
import FadeInWhenVisible from '../hooks/useFadeInWhenVisible';
import { motion } from 'framer-motion';

 
function SkillsDetails() {
    const history = useHistory();
    return (
        <>
            <div className="body__skillsDetail">
                <div className="skillsDetail__container">
                    <FadeInWhenVisible>     
                        <h3>Front End</h3>
                    </FadeInWhenVisible> 
                    <div className="app__skillsDetail">
                        
                        <FadeInWhenVisible>      <div className="itemSkillDetail">
                                <span className="span__card">This website</span> 
                                        <div className="cardSkillDetail">
                                            <img src="/images/html5circle.png" className="imgCard" alt="skills_hmtl5" />
                                        </div> 
                                <div className="showCardTitle"><p>HTML</p></div>
                                <div className="showCardExperience"><p>★★★★★</p></div>
                            </div>
                        
                            </FadeInWhenVisible>
                        <FadeInWhenVisible>
                             <div className="itemSkillDetail" >
                                <div className="cardSkillDetail">
                                    <img src="/images/ajaxcircle.png" className="imgCard" alt="skills_bootstrap" />
                                </div>
                                <div className="showCardTitle"><p>Ajax</p></div>
                                <div className="showCardExperience"><p>★★★✩✩</p></div>
                            </div>
                       
                            </FadeInWhenVisible>
                        <FadeInWhenVisible>
                                  <div className="itemSkillDetail" >
                                <div className="cardSkillDetail">
                                    <img src="/images/jquerycircle.png" className="imgCard" alt="skills_bootstrap" />
                                </div>
                                <div className="showCardTitle"><p>Jquery</p></div>
                                <div className="showCardExperience"><p>★★✩✩✩</p></div>
                            </div>
                     
                            </FadeInWhenVisible>
                        <FadeInWhenVisible>
                                  <div className="itemSkillDetail">
                                <span className="span__card">This website</span>
                                <div className="cardSkillDetail">
                                    <img src="/images/jscircle.png" className="imgCard" alt="skills_js" />
                                </div>
                                <div className="showCardTitle"><p>JavaScript</p></div>
                                <div className="showCardExperience"><p>★★★★★</p></div>
                            </div>

                        
                            </FadeInWhenVisible>
                        <FadeInWhenVisible>
                                 <div className="itemSkillDetail">
                                <span className="span__card">This website</span>
                                <div className="cardSkillDetail">
                                    <img src="/images/reactcircle.png" className="imgCard" alt="skills_react" />
                                </div>
                                <div className="showCardTitle"><p>React</p></div>
                                <div className="showCardExperience"><p>★★★★✩</p></div>
                            </div>
                      
                            </FadeInWhenVisible>
                        <FadeInWhenVisible>
                                  <div className="itemSkillDetail">
                                <span className="span__card">This website</span>
                                <div className="cardSkillDetail">
                                    <img src="/images/redux.png" className="imgCard" alt="skills_react" />
                                </div>
                                <div className="showCardTitle"><p>Redux</p></div>
                                <div className="showCardExperience"><p>★★✩✩✩</p></div>
                            </div>
                        </FadeInWhenVisible> 
                    </div>
                </div>
            </div>
            <div className="body__skillsDetail darker">
                <div className="skillsDetail__container">
                    
                        <FadeInWhenVisible>
                    <h3>CSS & UI </h3>
                        </FadeInWhenVisible> 
                    <div className="app__skillsDetail">
                         
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <span className="span__card">This website</span>
                            <div className="cardSkillDetail">
                                <img src="/images/csscircle.png" className="imgCard" alt="skills_css" />
                            </div>
                            <div className="showCardTitle"><p>CSS</p></div>
                            <div className="showCardExperience"><p>★★★★✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/bem.png" className="imgCard" alt="skills_bootstrap" />
                            </div>
                            <div className="showCardTitle"><p>BEM</p></div>
                            <div className="showCardExperience"><p>★★★✩✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/sass.png" className="imgCard" alt="skills_bootstrap" />
                            </div>
                            <div className="showCardTitle"><p>Sass</p></div>
                            <div className="showCardExperience"><p>★★✩✩✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/bootstrapcircle.png" className="imgCard" alt="skills_bootstrap" />
                            </div>
                            <div className="showCardTitle"><p>Bootstrap</p></div>
                            <div className="showCardExperience"><p>★★★★✩</p></div>
                        </div>
                        </FadeInWhenVisible> 
                    </div>
                </div>
            </div>
            <div className="body__skillsDetail">
                <div className="skillsDetail__container">
                     
                        <FadeInWhenVisible>
                    <h3>Back End</h3>
                        </FadeInWhenVisible>
                      
                    <div className="app__skillsDetail">   
                    
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/phpcircle.png" className="imgCard" alt="skills_php" />
                            </div>
                            <div className="showCardTitle"><p>PHP</p></div>
                            <div className="showCardExperience"><p>★★★★✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail">
                            <span className="span__card">This website </span>
                            <div className="cardSkillDetail">
                                <img src="/images/firebase.png" className="imgCard" alt="skills_firebase" />
                            </div>
                            <div className="showCardTitle"><p>Firebase</p></div>
                            <div className="showCardExperience"><p>★★★✩✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail">
                            <div className="cardSkillDetail">
                                <img src="/images/symfony.png" className="imgCard" alt="skills_symfony" />
                            </div>
                            <div className="showCardTitle"><p>Symfony</p></div>
                            <div className="showCardExperience"><p>★★★✩✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail">
                            <div className="cardSkillDetail">
                                <img src="/images/wordpress.png" className="imgCard" alt="skills_wordpress" />
                            </div>
                            <div className="showCardTitle"><p>Wordpress</p></div>
                            <div className="showCardExperience"><p>★★★★✩</p></div>
                        </div>
                        </FadeInWhenVisible> 
                    </div>
                </div> 
            </div>
            <div className="body__skillsDetail darker"> 
                <div className="skillsDetail__container">
                     
                        <FadeInWhenVisible>
                    <h3>DataBase & Testing</h3>
                        </FadeInWhenVisible>
                  
                    <div className="app__skillsDetail">
                         
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/mysql.png" className="imgCard" alt="skills_selenium" />
                            </div>
                            <div className="showCardTitle"><p>MySQL</p></div>
                            <div className="showCardExperience"><p>★★★★✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail">
                            <div className="cardSkillDetail">
                                <img src="/images/mongo.png" className="imgCard" alt="skills_firebase" />
                            </div>
                            <div className="showCardTitle"><p>MongoDB</p></div>
                            <div className="showCardExperience"><p>★★✩✩✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/selenium.png" className="imgCard" alt="skills_selenium" />
                            </div>
                            <div className="showCardTitle"><p>Selenium</p></div>
                            <div className="showCardExperience"><p>★★★✩✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail">
                            <div className="cardSkillDetail">
                                <img src="/images/jest.png" className="imgCard" alt="skills_firebase" />
                            </div>
                            <div className="showCardTitle"><p>Jest</p></div>
                            <div className="showCardExperience"><p>★★✩✩✩</p></div>
                        </div>
                        </FadeInWhenVisible> 
                    </div>
                </div> 
            </div>

            <div className="body__skillsDetail">
                <div className="skillsDetail__container">
               
                        <FadeInWhenVisible>
                    <h3>Marketing & Tools</h3>
                        </FadeInWhenVisible>
                
                    <div className="app__skillsDetail"> 
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/mailchimpcircle.png" className="imgCard" alt="skills_selenium" />
                            </div>
                            <div className="showCardTitle"><p>MailChimp</p></div>
                            <div className="showCardExperience"><p>★★★★✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail">
                            <div className="cardSkillDetail">
                                <img src="/images/sem.png" className="imgCard" alt="skills_firebase" />
                            </div>
                            <div className="showCardTitle"><p>SEO / SEM</p></div>
                            <div className="showCardExperience"><p>★★★★✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail">
                            <div className="cardSkillDetail">
                                <img src="/images/seosite.png" className="imgCard" alt="skills_firebase" />
                            </div>
                            <div className="showCardTitle"><p>siteCheckup</p></div>
                            <div className="showCardExperience"><p>★★★★✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail">
                            <div className="cardSkillDetail">
                                <img src="/images/semrush.png" className="imgCard" alt="skills_firebase" />
                            </div>
                            <div className="showCardTitle"><p>SEMRush</p></div>
                            <div className="showCardExperience"><p>★★★✩✩</p></div>
                        </div>
                        </FadeInWhenVisible> 
                    </div>
                </div>
            </div>
            <div className="body__skillsDetail darker">
                <div className="skillsDetail__container">
                
                        <FadeInWhenVisible>
                    <h3>Other Tools</h3>
                        </FadeInWhenVisible>
                    
                    <div className="app__skillsDetail"> 
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/postman.png" className="imgCard" alt="skills_selenium" />
                            </div>
                            <div className="showCardTitle"><p>PostMan</p></div>
                            <div className="showCardExperience"><p>★★★✩✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/hotjar.png" className="imgCard" alt="skills_insights" />
                            </div>
                            <div className="showCardTitle"><p>Hotjar</p></div>
                            <div className="showCardExperience"><p>★★★★✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/insights.png" className="imgCard" alt="skills_insights" />
                            </div>
                            <div className="showCardTitle"><p>PageSpeed</p></div>
                            <div className="showCardExperience"><p>★★★★★</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/cpanelcircle.png" className="imgCard" alt="skills_insights" />
                            </div>
                            <div className="showCardTitle"><p>cPanel</p></div>
                            <div className="showCardExperience"><p>★★★★✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/npm.png" className="imgCard" alt="skills_insights" />
                            </div>
                            <div className="showCardTitle"><p>npm</p></div>
                            <div className="showCardExperience"><p>★★★✩✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/github.png" className="imgCard" alt="skills_insights" />
                            </div>
                            <div className="showCardTitle"><p>GitHub</p></div>
                            <div className="showCardExperience"><p>★★★★✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/ftp.png" className="imgCard" alt="skills_insights" />
                            </div>
                            <div className="showCardTitle"><p>FTP/SFTP</p></div>
                            <div className="showCardExperience"><p>★★★★✩</p></div>
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible>
                        <div className="itemSkillDetail" >
                            <div className="cardSkillDetail">
                                <img src="/images/svn.png" className="imgCard" alt="skills_insights" />
                            </div>
                            <div className="showCardTitle"><p>TortoiseSVN</p></div>
                            <div className="showCardExperience"><p>★★★✩✩</p></div>
                        </div>
                        </FadeInWhenVisible> 
                    </div>
                    <a onClick={() => history.push("/")}>
                        <motion.div animate={{  x: [0, -10], opacity: 1, transition: { yoyo: Infinity, ease: "easeIn" } }} >
                            <KeyboardBackspaceIcon />
                        </motion.div> 
                        Back to home
                    </a>
                </div>
            </div>
        </>
    )
}


export default SkillsDetails