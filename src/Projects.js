import React, {Component} from 'react';
import './Projects.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import expense01 from './assets/Expense-01.png';
import tennisStore01 from './assets/Tennis-Store01.png';
import university01 from './assets/University01.png';
import contact01 from './assets/Contacts01.png';

class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="divProjectsStyle">
                <div className="divAboutMeHeader" >
                   <h1 >  Projects </h1>
                   <hr className="solid"></hr>
                </div>
                <div className="divProjects-Cards">
                    <div className="divProjects-Cards-inside">
                <Card style={{ width: '90%', height: '100%'  }}>
                    <Card.Img variant="top" src={expense01} />
                    <Card.Body>
                        <Card.Title>Expense Tracker</Card.Title>
                        <Card.Text>
                        Keep track of your expenses and get monthly reports. 
                        Application Built using React and Spring-Boot and H2 database.
                        </Card.Text>
                        <a href="/">Full Details</a>
                    </Card.Body>
                    </Card>
                    </div>
                    <div className="divProjects-Cards-inside">
                    <Card style={{ width: '90%', height: '100%' }}>
                    <Card.Img variant="top" src={tennisStore01} />
                    <Card.Body>
                        <Card.Title>Tennis Store App</Card.Title>
                        <Card.Text>
                        The ultimate shopping experience to buy tennis equipments and accessories. 
                        The application is build using Spring-Boot and MySQL.
                        </Card.Text>
                        <a href="/">Full Details</a>
                    </Card.Body>
                    </Card>
                    </div>
                    </div>
                    <div className="divProjects-Cards">
                    <div className="divProjects-Cards-inside">
                    <Card style={{ width: '90%', height: '100%' }}>
                    <Card.Img variant="top" src={university01} />
                    <Card.Body>
                        <Card.Title>Extracurricular Database</Card.Title>
                        <Card.Text>
                        University Portal to track their students Extracurricular activities.
                        Built in Spring and MySQL.
                        </Card.Text>
                        <a href="/">Full Details</a>
                    </Card.Body>
                    </Card>
                    </div>
                    <div className="divProjects-Cards-inside">
                    <Card style={{ width: '90%', height: '100%' }}>
                    <Card.Img variant="top" src={contact01} />
                    <Card.Body>
                        <Card.Title>Contacts Card Management</Card.Title>
                        <Card.Text>
                        Application to store contact related information for clients.<br/>
                        Built in Spring and React.
                        </Card.Text>
                        <a href="/">Full Details</a>
                    </Card.Body>
                    </Card>
                    </div>
                    </div>
            </div >
            </div>
         );
    }
}
 
export default Projects;