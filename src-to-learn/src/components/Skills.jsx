import React from 'react';
import SkillItem from './SkillItem';
import './skill.css'
function Skills() {
    return (
        <>
            <div className="ski " id='skill' >
                <div className="sc" style={{ backgroundColor: "", padding: "20px" }} >
                    <div className="dc my-5" style={{ maxWidth: "1200px", margin: "0 auto" }} >
                        <div className="ac " style={{
                            width: "",
                            height: "",
                            borderRadius: '', display: "", alignContent: "",
                            objectFit: "", alignItems: ""
                        }}>
                            <div className=''>
                            <h1 className=''>My Skills <i className="fa-solid fa-graduation-cap "></i></h1>
                            <div className=''>
                            <SkillItem skillName="React" skillLevel={90} name="fa-brands fa-react fa-spin" />
                            <SkillItem skillName="JavaScript" skillLevel={85} name="fa-brands fa-square-js " />
                            <SkillItem skillName="Node JS" skillLevel={87} name="fa-brands fa-node-js " />
                            <SkillItem skillName="Express JS" skillLevel={86} name="fa-brands fa-node-js " />
                            <SkillItem skillName="Mongo DB" skillLevel={88} name="fa-solid fa-database " />
                            <SkillItem skillName="JAVA" skillLevel={90} name="fa-brands fa-java  " />
                            <SkillItem skillName="JWT Authentication" skillLevel={77} name="fa-solid fa-globe " />
                            <SkillItem skillName="Data Structures And Algorithms" skillLevel={80} name="fa-solid fa-laptop-code " />
                            <SkillItem skillName="Azure DevOps" skillLevel={89} name="fa-solid fa-infinity " />
                            <SkillItem skillName="Github" skillLevel={77} name="fa-brands fa-github "/>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
