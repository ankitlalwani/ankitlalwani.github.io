import React, {Component} from 'react';
import AppNav from "./AppNav";
import { Container, Row, Col} from 'reactstrap';
import bgimage01 from './assets/bg-image01.png';
import profilepic from './assets/profile-pic.png';
import profilepic3 from './assets/profile-pic03.png';
import Linkedin1 from './assets/Linkedin01.png';
import Facebook1 from './assets/facebook01.png';
import Github1 from './assets/GitHub01.png';
import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image';
import './Home.css';
import AboutMe from "./AboutMe";
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import { Link, Element, Events, scrollSpy } from "react-scroll";
import Experience from './Experience';
import Education from './Education';
import RelevantCourses from './RelevantCourses';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
        //   field: value
        }
        //creates a reference for your element to use
        this.myDivToFocus = React.createRef()
     }
   
     handleOnClick = (event) => {
        //.current is verification that your element has rendered
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }

    render() { 
        return (
                <div>
                    <div class="divStyle">
                    
                    <div className="divAppNav">
                    <Navbar sticky="top" position="sticky" style={{height: "70%", fontSize: "larger", fontFamily: "sans-serif"}}
                       collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">Ankit Lalwani</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                >About</Link></Nav.Link>
                            <Nav.Link><Link
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={500}>                                
                                Experience</Link></Nav.Link>
                            <Nav.Link>
                            <Link
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={500}>
                                Education</Link></Nav.Link>
                                <Nav.Link>
                            <Link
                                to="relevantCourses"
                                spy={true}
                                smooth={true}
                                duration={500}>
                                Relevant Courses</Link></Nav.Link>
                            <NavDropdown 
                             title="Projects" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Expense Tracker</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Tennis Portal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Shopping Cart</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500}>All Projects</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>
                            <Link
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}>
                                Skills</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}>
                                Contact</Link></Nav.Link>
                            <Nav.Link>
                            <Link
                                to="blog"
                                spy={true}
                                smooth={true}
                                duration={500}>
                                Blog</Link></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    </div>
                    <Container>
                    <div class="divProfileImage">
                        <Image src={profilepic3} roundedCircle fluid></Image><br/>
                        <h1 class="h1Name">Ankit Lalwani</h1><br/>
                        <h1 class="h1Role">Software Engineer| Web Developer| AI/ML Enthusiast  </h1><br/>
                        <div>
                        <a class="divOtherHREF" href="https://www.linkedin.com/in/ankit-lalwani/" target = "_blank">
                            <img className="divOtherImage" src={Linkedin1} ></img></a>
                        <a class="divOtherHREF" href="https://www.facebook.com/ankit.lalwani.58" target = "_blank">
                            <img className="divOtherImage" src={Facebook1}></img></a>
                        <a class="divOtherHREF" href="https://github.com/ankitlalwani" target = "_blank">
                            <img className="divOtherImage" src={Github1} ></img></a>
                        </div>
                        <div class="divBadge">
                        <a href="Resume_Ankit_Lalwani_SinglePage.pdf" target = "_blank"><h1 class="divH1">
                            <Badge variant="dark"> Resume</Badge></h1></a>
                        </div>
                    </div>
                    </Container>
                    
                    <div className="div-section-top"><Element name="about" className="element"></Element>
                        <div>

                        </div>
                        <div>
                       <AboutMe />
                       </div>
                    </div>
                    
                    <div className="div-section-top"><Element name="experience" className="element"></Element>
                       <Experience />
                    </div>

                    <div className="div-section-top"><Element name="education" className="element"></Element>
                       <Education />
                    </div>

                    <div className="div-section-top"><Element name="relevantCourses" className="element"></Element>
                       <RelevantCourses />
                    </div>

                    <div className="div-section-top"><Element name="projects" className="element"></Element>
                       <Projects />
                    </div>

                    <div className="div-section-top"><Element name="skills" className="element"></Element>
                       <Skills />
                    </div>
                    <div className="div-section-top"><Element name="contact" className="element"></Element>
                       <Contact />
                    </div>
                    <h5 className="h5CopyrightFooter"> Copyright © 2020 by Ankit Lalwani </h5>
                    </div>
            </div>
        
         );
    }
}
 
export default Home;