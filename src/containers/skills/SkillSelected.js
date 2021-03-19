import React from 'react'
import { useHistory } from 'react-router';
import FadeInWhenVisible from '../../hooks/useFadeInWhenVisible.js';
import PrintCategory from '../PrintCategory.js'; 
import { data } from './../../backend/db.js';

function SkillSelected({ selectedSkill }) {
    const arraySkills = Array.from(data);
    const arraySkillsEmpty = arraySkills.filter(skill => skill.id === selectedSkill).map(filteredSkill => filteredSkill);
 
    return (
        <div className="body__skillSelected">
            {arraySkillsEmpty.length > 0 ? (
                arraySkills.filter(skill => skill.id === selectedSkill).map(filteredSkill => (
                    <>
                        <div className="skillSelected__container">
                            <div className="skillSelected__left">
                                <img src={filteredSkill.imgurl} className="imgCard" alt={filteredSkill.id} />
                            </div>
                            <div className="skillSelected__right">
                                <h1>{filteredSkill.name} {filteredSkill.experience}</h1>
                                <span>{filteredSkill.category}</span>
                                <p> {filteredSkill.description}</p>
                                <a href={filteredSkill.externalurl} target="_blank"><h2>{filteredSkill.externalurl}</h2></a>
                            </div>
                        </div>
                        <FadeInWhenVisible>
                            <h1>{filteredSkill.category} </h1>
                        </FadeInWhenVisible>
                        
                        <div className="app__skillsDetail">
                            {PrintCategory(filteredSkill.category)} 
                        </div>
                        
                    </>
                ))
            ) : (
                <>
                    <h2>Error, Skill not found</h2>
                    <p><i>id_error_created: 923038203</i></p>
                </>
            )}
            {/*
                arraySkills.map(arraySkills => (
                    <p key={arraySkills.id}>
                        <span>{arraySkills.id}</span>
                    </p>
                ))*/
            }
        </div>
    )
}

export default SkillSelected