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
                <a onClick={() => history.push("/skills")}>
                    <motion.div animate={{ x: [0, -10], opacity: 1, transition: { yoyo: Infinity, ease: "easeIn" } }} >
                        <KeyboardBackspaceIcon />
                    </motion.div>
                    Back to home
                </a>
                <SkillSelected selectedSkill={id} />
                <a onClick={() => history.push("/skills")}>
                    <motion.div animate={{ x: [0, -10], opacity: 1, transition: { yoyo: Infinity, ease: "easeIn" } }} >
                        <KeyboardBackspaceIcon />
                    </motion.div>
                    Back to home
                </a>
            </FadeInWhenVisible>
        </div>
    </div>
    );
}

export default GetPost