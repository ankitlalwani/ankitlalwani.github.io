import React, {Component} from 'react';
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';


const popover1 = (
    <Popover id="popover-basic" style={{maxWidth: "500px"}}>
      <Popover.Title as="h3">Roles and Responsibilities</Popover.Title>
      <Popover.Content>
        <ul>
            <li>Involved in collecting UI Requirements, designing the UI/UX Strategy and convert findings to UI design</li>
            <li>Created single page application structure with multiple modules using ReactJS, JavaScript</li>
            <li>Created login page using single sign on, main page with favourites</li>
            <li>Created core modules and components which included Navbar, Toolbar, services and Routing</li>
        </ul>
      </Popover.Content>
    </Popover>
  );

  const popover2 = (
    <Popover id="popover-basic" style={{maxWidth: "500px"}}>
      <Popover.Title as="h3">Roles and Responsibilities</Popover.Title>
      <Popover.Content>
        <ul>
            <li>Developed user interfaces using JSP, Struts, AJAX, JSTL and JavaScript.</li>
            <li>Implemented Spring MVC framework for developing J2EE web based application.</li>
            <li>Communicated with Business Architects on a regular basis to analyse the requirements and for the preparation of detailed BRD (business Requirement document).</li>
            <li>Created Spring services, controllers and DAO’s to achieve dependency injection.</li>
            <li>Used Hibernate 3.0 in data access layer for accessing and updating database.</li>
            <li>Integrated Spring and Hibernate ORM framework for persistence and used Hibernate DAO Support with Hibernate Template to access the data</li>
            <li>Implemented caching techniques, wrote POJO classes for storing data and DAO's to retrieve the data and other database configurations using Hibernate.</li>
            <li>Wrote SQL scripts to write database calls.</li>
        </ul>
      </Popover.Content>
    </Popover>
  );

class Experience extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="divExperienceStyle">
                <div className="divAboutMeHeader" >
                   <h1 >  Experience </h1>
                   <hr className="solid"></hr>
                </div>
                <div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Oct, 2014 - Jun, 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                        <h3 className="vertical-timeline-element-title">Technology Analyst</h3>
                        <h3 className="h3Experience">WellsFargo/Infosys</h3>
                        <h4 className="vertical-timeline-element-subtitle">Charlotte, NC</h4>
                        <p>
                        Develop Rich prototypes, Tools & Subroutines, Single Page Applications, Analyze High Volume Daily Transaction Feeds and provide scalable designs.<br/>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
                        <Button className="button-experience-responsibilities">View full Responsibilities</Button>
                        </OverlayTrigger>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Sep, 2008 - Sep, 2014"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Software Developer</h3>
                        <h3 className="h3Experience">Infosys Ltd</h3>
                        <h4 className="vertical-timeline-element-subtitle">Pune, India</h4>
                        <p>
                        Develop RESTFul services, Create responsive web applications, database designs, Spring framework, Full stack development.<br/>
                        <OverlayTrigger trigger="click" placement="left" overlay={popover2}>
                            <Button className="button-experience-responsibilities">Roles and Responsibilities</Button>
                        </OverlayTrigger>
                        </p>
                    </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
                
            </div>
         );
    }
}
 
export default Experience;