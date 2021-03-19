import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router-dom'
import FadeInWhenVisible from '../hooks/useFadeInWhenVisible';
import { motion } from 'framer-motion';
import PrintCategory from './PrintCategory';
const categories = [
    "Front End", "CSS & UI", "Back End", "DataBase & Testing", "Marketing & Tools", "Other Tools"
];

function ChangeColor(container_color){
    container_color = !container_color;
}

function SkillsDetails() {
    const history = useHistory();
    let container_color = false;
    return (
        <>

            {categories.map((category,counter) => (
                counter%2 == 0 ? (
                    <div className="body__skillsDetail">
                        <div className="skillsDetail__container">
                            <FadeInWhenVisible>
                                <h3>{category}</h3>
                            </FadeInWhenVisible>
                            <div className="app__skillsDetail">
                                {PrintCategory(category)}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="body__skillsDetail darker">
                        <div className="skillsDetail__container">
                            <FadeInWhenVisible>
                                <h3>{category}</h3>
                            </FadeInWhenVisible>
                            <div className="app__skillsDetail">
                                {PrintCategory(category)}
                            </div>
                        </div>
                    </div>
                )
            ))
            }
             
            <div className="backHome__body darker">
                <div className="backHome__container">
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
