import React, {Component} from 'react';
import './Education.css';


class Education extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="divEducationStyle">
                <div className="divAboutMeHeader" >
                   <h1 >  Education </h1>
                   <hr className="solid"></hr>
                </div>

                <div className="divEducation-Box-Cover" >
                <div className="divEducationBox">
                <table>
                    <tr>
                        <td className="tdEducation-First-Column-First-Row">
                            University Of Georgia, Athens
                        </td>
                        <td className="tdEducation-Second-Column-First-Row">
                            Jan 2020 - May 2021 
                        </td>
                    </tr>
                    <tr>
                        <td className="tdEducation-First-Column-Second-Row">
                            Masters in Computer Science
                        </td>
                    </tr>
                </table>
                </div>
                </div>  

                <div className="divEducation-Box-Cover" >
                <div className="divEducationBox">
                <table>
                    <tr>
                        <td className="tdEducation-First-Column-First-Row">
                            University Institute of Technology, R.G.P.V. Bhopal
                        </td>
                        <td className="tdEducation-Second-Column-First-Row">
                            June 2004 - May 2008 
                        </td>
                    </tr>
                    <tr>
                        <td className="tdEducation-First-Column-Second-Row">
                            Bachelors in Electronics and Communication
                        </td>
                    </tr>
                </table>
                </div>
                </div>                
            </div >
            </div>
         );
    }
}
 
export default Education;
