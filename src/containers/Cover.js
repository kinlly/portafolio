import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function Cover() {
    return (
        <div className="body__modal">
            <div className="cover__title">
                <h1>Cristian Duarte</h1>
                <h2>Full Stack Developer</h2>
                <div className="cover__options">
                    <div className="titleOptions">
                       <a href="https://github.com/kinlly" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a> 
                    </div>
                    <div className="titleOptions">
                        <a href="https://www.linkedin.com/in/cristian-lora-duarte/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a> 
                    </div>
                    <div className="titleOptions">
                        <a href="mailto:fsd.cristian@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover
