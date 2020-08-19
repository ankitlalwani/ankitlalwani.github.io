import React, {Component} from 'react';
import './RelevantCourses.css';
import './Education.css'

class RelevantCourses extends Component {
    state = {  }
    render() { 
        return ( <div>
                    <div className="divRelevantCoursesStyle">
                        <div className="divAboutMeHeader">
                        <h1 >  Relevant Coursework </h1>
                        <hr className="solid-RelevantCoursework"></hr>
                        </div>
                        <div className="divEducation-Box-Cover">
                        <div className="divEducationBox">
                        <table>
                            <tr>
                                <td className="tdEducation-First-Column-First-Row">
                                    Algorithms
                                </td>
                                <td className="tdEducation-Second-Column-First-Row">
                                    Spring-2020 
                                </td>
                            </tr>
                            <tr>
                                <td className="tdEducation-First-Column-Second-Row">
                                Algorithms, covering basic analysis techniques, basic design techniques 
                                (divide-and-conquer, dynamic programming, greedy, and branch-and-bound), 
                                basic graph algorithms, and NP-completeness.
                                </td>
                            </tr>
                            <tr><br/><br/></tr>
                            <tr>
                                <td className="tdEducation-First-Column-First-Row">
                                    Computer Networks
                                </td>
                                <td className="tdEducation-Second-Column-First-Row">
                                    Spring-2020 
                                </td>
                            </tr>
                            <tr>
                                <td className="tdEducation-First-Column-Second-Row">
                                In-depth coverage of computer networks, including: digital data transmission 
                                and encoding, layered protocol models, Internet protocol, Internet client-server 
                                software, and network design methodology.
                                </td>
                            </tr>
                            <tr><br/><br/></tr>
                            <tr>
                                <td className="tdEducation-First-Column-First-Row">
                                    Database Systems
                                </td>
                                <td className="tdEducation-Second-Column-First-Row">
                                    Summer-2020 
                                </td>
                            </tr>
                            <tr>
                                <td className="tdEducation-First-Column-Second-Row">
                                The theory and practice of database management. Topics to be covered include 
                                efficient file access techniques, the relational data model as well as other 
                                data models, query languages, database design using entity-relationship diagrams 
                                and normalization theory, query optimization, and transaction processing.
                                </td>
                            </tr>
                            <tr><br/><br/></tr>
                            <tr>
                                <td className="tdEducation-First-Column-First-Row">
                                    Data Mining
                                </td>
                                <td className="tdEducation-Second-Column-First-Row">
                                    Summer-2020 
                                </td>
                            </tr>
                            <tr>
                                <td className="tdEducation-First-Column-Second-Row">
                                A broad introduction to data mining methods and an exploration of research problems 
                                in data mining and its applications in complex real-world domains. 
                                Approaches include association and classification rule learning, 
                                tree learning, neural network and Bayesian methods, support vector machines, 
                                clustering, and ensemble learning.
                                </td>
                            </tr> 
                        </table>
                        </div>
                        </div>                    
                    </div >
        </div> );
    }
}
 
export default RelevantCourses;