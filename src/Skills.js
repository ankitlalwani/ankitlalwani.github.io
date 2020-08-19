import React, {Component} from 'react';
import './Skills.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Skills extends Component {
    state = {  }
    render() { 
        return ( <div>
                    <div className="divSkillsStyle">
                        <div className="divAboutMeHeader" >
                        <h1 >  Skill Matrix </h1>
                        <hr className="solid-Skills"></hr>
                        </div>
                        <div className="divSkillsMatrix">

                        <div className="divEachSkill-Left" >
                            <div className="divEachSkill-Left-inline">
                            <h5 className="h5skillLeft">ReactJS</h5>
                            <h3 className="h3skillLeft">70%</h3>
                            </div>
                        <ProgressBar style={{backgroundColor: "gray"}}  now={70} />
                        </div>
                        <div className="divEachSkill-Right" >
                            <div className="divEachSkill-Right-inline">
                            <h5 className="h5skillRight">Spring-Boot</h5>
                            <h3 className="h3skillRight">80%</h3>
                            </div>
                        <ProgressBar style={{backgroundColor: "gray"}}  now={80} />
                        </div>
                        </div>

                        <div className="divSkillsMatrix">

                            <div className="divEachSkill-Left" >
                                <div className="divEachSkill-Left-inline">
                                <h5 className="h5skillLeft">Java</h5>
                                <h3 className="h3skillLeft">90%</h3>
                                </div>
                            <ProgressBar style={{backgroundColor: "gray"}}  now={90} />
                            </div>
                            <div className="divEachSkill-Right" >
                                <div className="divEachSkill-Right-inline">
                                <h5 className="h5skillRight">HTML & CSS</h5>
                                <h3 className="h3skillRight">80%</h3>
                                </div>
                            <ProgressBar style={{backgroundColor: "gray"}}  now={80} />
                            </div>
                            </div>

                            <div className="divSkillsMatrix">

                                <div className="divEachSkill-Left" >
                                    <div className="divEachSkill-Left-inline">
                                    <h5 className="h5skillLeft">JavaScript</h5>
                                    <h3 className="h3skillLeft">60%</h3>
                                    </div>
                                <ProgressBar style={{backgroundColor: "gray"}}  now={60} />
                                </div>
                                <div className="divEachSkill-Right" >
                                    <div className="divEachSkill-Right-inline">
                                    <h5 className="h5skillRight">SQL</h5>
                                    <h3 className="h3skillRight">90%</h3>
                                    </div>
                                <ProgressBar style={{backgroundColor: "gray"}}  now={90} />
                                </div>
                                </div>

                                <div className="divSkillsMatrix">

                                <div className="divEachSkill-Left" >
                                    <div className="divEachSkill-Left-inline">
                                    <h5 className="h5skillLeft">BootStrap 4</h5>
                                    <h3 className="h3skillLeft">70%</h3>
                                    </div>
                                <ProgressBar style={{backgroundColor: "gray"}}  now={70} />
                                </div>
                                <div className="divEachSkill-Right" >
                                    <div className="divEachSkill-Right-inline">
                                    <h5 className="h5skillRight">GIT</h5>
                                    <h3 className="h3skillRight">80%</h3>
                                    </div>
                                <ProgressBar style={{backgroundColor: "gray"}}  now={80} />
                                </div>
                                </div>

                                <div className="divSkillsMatrix">

                                <div className="divEachSkill-Left" >
                                    <div className="divEachSkill-Left-inline">
                                    <h5 className="h5skillLeft">COBOL</h5>
                                    <h3 className="h3skillLeft">70%</h3>
                                    </div>
                                <ProgressBar style={{backgroundColor: "gray"}}  now={70} />
                                </div>
                                <div className="divEachSkill-Right" >
                                    <div className="divEachSkill-Right-inline">
                                    <h5 className="h5skillRight">DB2</h5>
                                    <h3 className="h3skillRight">60%</h3>
                                    </div>
                                <ProgressBar style={{backgroundColor: "gray"}}  now={60} />
                                </div>
                                </div>

                                <div className="divSkillsMatrix">

                                <div className="divEachSkill-Left" >
                                    <div className="divEachSkill-Left-inline">
                                    <h5 className="h5skillLeft">JCL</h5>
                                    <h3 className="h3skillLeft">70%</h3>
                                    </div>
                                <ProgressBar style={{backgroundColor: "gray"}}  now={70} />
                                </div>
                                <div className="divEachSkill-Right" >
                                    <div className="divEachSkill-Right-inline">
                                    <h5 className="h5skillRight">IMS</h5>
                                    <h3 className="h3skillRight">50%</h3>
                                    </div>
                                <ProgressBar style={{backgroundColor: "gray"}}  now={50} />
                                </div>
                                </div>
                    </div >

                    
        </div> );
    }
}
 
export default Skills;