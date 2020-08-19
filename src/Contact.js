import React, {Component} from 'react';
import './Contact.css';
import Linkedin1 from './assets/Linkedin01.png';
import Facebook1 from './assets/facebook01.png';
import Github1 from './assets/GitHub01.png';


class Contact extends Component {
    state = {  }
    render() { 
        return ( 
                <div className="divEducationStyle">
                <div className="divAboutMeHeader" >
                   <h1 >  Contact </h1>
                   <hr className="solid-Contacts"></hr>
                </div>
                <div className="divContactDetails">
                    <p>
                    If you are interested in working with me, please contact me any of the below platforms.
                    </p>
                </div>
                <div className="divContact-wrapper">
                    <div className="divContact-email">
                        <h3 className= "h3-Contact-media">
                            Email ID:
                        </h3>
                        ankitlalwani30@gmail.com
                    </div>
                    <div className="divContact-media">
                        <h3 className= "h3-Contact-media">Social media</h3>
                        
                        <a class="divOtherHREF" href="https://www.linkedin.com/in/ankit-lalwani/" target = "_blank">
                            <img className="divOtherImage" src={Linkedin1} ></img></a>
                        <a class="divOtherHREF" href="https://www.facebook.com/ankit.lalwani.58" target = "_blank">
                            <img className="divOtherImage" src={Facebook1}></img></a>
                        <a class="divOtherHREF" href="https://github.com/ankitlalwani" target = "_blank">
                            <img className="divOtherImage" src={Github1} ></img></a>
                    </div>
                </div>
                </div>
         );
    }
}
 
export default Contact;