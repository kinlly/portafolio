import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router-dom'
import FadeInWhenVisible from '../hooks/useFadeInWhenVisible';
import { motion } from 'framer-motion';
import PrintCategory from './PrintCategory';

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
                        {PrintCategory("Front End")}
                    </div>
                </div>
            </div>
            <div className="body__skillsDetail darker">
                <div className="skillsDetail__container">
                    <FadeInWhenVisible>
                        <h3>CSS & UI</h3>
                    </FadeInWhenVisible>
                    <div className="app__skillsDetail">
                        {PrintCategory("CSS & UI")}
                    </div>
                </div>
            </div>
            <div className="body__skillsDetail">
                <div className="skillsDetail__container">
                    <FadeInWhenVisible>
                        <h3>Back End</h3>
                    </FadeInWhenVisible>
                    <div className="app__skillsDetail">
                        {PrintCategory("Back End")}
                    </div>
                </div>
            </div>
            <div className="body__skillsDetail darker">
                <div className="skillsDetail__container">
                    <FadeInWhenVisible>
                        <h3>DataBase & Testing</h3>
                    </FadeInWhenVisible>
                    <div className="app__skillsDetail">  
                        {PrintCategory("DataBase & Testing")} 
                    </div>
                </div>
            </div>

            <div className="body__skillsDetail">
                <div className="skillsDetail__container">
                    <FadeInWhenVisible>
                        <h3>Marketing & Tools</h3>
                    </FadeInWhenVisible>
                    <div className="app__skillsDetail">
                        {PrintCategory("Marketing & Tools")} 
                    </div>
                </div>
            </div>
            <div className="body__skillsDetail darker">
                <div className="skillsDetail__container">
                    <FadeInWhenVisible>
                        <h3>Other Tools</h3>
                    </FadeInWhenVisible>
                    <div className="app__skillsDetail">
                        {PrintCategory("Other Tools")}  
                    </div>
                    <a onClick={() => history.push("/")}>
                        <motion.div animate={{ x: [0, -10], opacity: 1, transition: { yoyo: Infinity, ease: "easeIn" } }} >
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
