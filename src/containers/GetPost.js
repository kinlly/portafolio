import { motion } from 'framer-motion';
import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import FadeInWhenVisible from '../hooks/useFadeInWhenVisible';
import SkillSelected from './skills/SkillSelected';


function GetPost() {
    const history = useHistory();
    const { id } = useParams();

    return (
        <div className="body__skillsDetail fullview">
            <div className="skillsDetail__container">
                <FadeInWhenVisible>
                    <div className="backHome__body darker">
                        <div className="backHome__container">
                            <a onClick={() => history.push("/skills")}>
                                <motion.div animate={{ x: [0, -10], opacity: 1, transition: { yoyo: Infinity, ease: "easeIn" } }} >
                                    <KeyboardBackspaceIcon />
                                </motion.div>
                                Back to skills
                            </a>
                        </div>
                    </div>
                    <SkillSelected selectedSkill={id} />
                    
                </FadeInWhenVisible>
            </div>
        </div>
    );
}

export default GetPost