import React from 'react'
import { useHistory } from 'react-router';
import FadeInWhenVisible from '../hooks/useFadeInWhenVisible.js';
import { data } from './../backend/db.js';

function PrintCategory(category){

    const arraySkills = Array.from(data);
    const arraySkillsEmpty = arraySkills.filter(skill => skill.category === category).map(filteredSkill => filteredSkill);
    const history = useHistory();

    return ( 
        arraySkillsEmpty.length > 0 ? (
        arraySkills.filter(skill => skill.category === category).map(filteredSkill => (
                <FadeInWhenVisible>
                    <div className="itemSkillDetail" onClick={() => history.push("/skills/"+filteredSkill.id)}>
                        {filteredSkill.website === true ? <span className="span__card">This website</span> : null}
                        <div className="cardSkillDetail">
                            <img src={filteredSkill.imgurl} className="imgCard" alt={filteredSkill.alt} />
                        </div>
                        <div className="showCardTitle"><p>{filteredSkill.name}</p></div>
                        <div className="showCardExperience"><p>{filteredSkill.experience}</p></div>
                    </div>
                </FadeInWhenVisible>     
        ))
    ) : (
        <>
            <h2>Error, Skill not found</h2>
            <p><i>id_error_created: 923038203</i></p>
        </>
    )
    )
}

export default PrintCategory
