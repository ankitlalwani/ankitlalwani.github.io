import React, {Component} from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="divAboutMeStyle">
                <div className="divAboutMeHeader" >
                   <h1>  About Me</h1>
                   <hr className="solid"></hr>
                </div>
                <div className="divAboutMeDetails">
                    <p>
                    I enjoy the <a1>challenges</a1> and <a1>problem solving</a1> specially when I have to code. Ever since I first started learning C, I found my interest in writing the code.<br/>
                    I love the process of figuring out the logic/algorithm and implement it to design a beautiful solution.<br/>
                    In my professional experience of <a1>10 years with Infosys</a1>, I was presented lot of opportunities to showcase my skills. <br/>
                    I started as a systems developer and within 3 years I moved into a technology analyst role after 2 promotions. <br/>
                    I was involved in various software development and maintenance projects with multiple banking and financial clients. During my 3+ years of assignment in <a1>Charlotte</a1>, <br/>
                    I solely handled the onshore part of the application which also include detailed analysis, code walk through/presentations, deployment and production support.<br/>
                    Currently being a graduate student in <a1>University of Georgia</a1>, I am doing my research to support multi paradigm data modelling using Scala. <br/>
                    <a2>My thrive towards learning new skills and build efficient products is perpetual.</a2>
                    </p>
                </div>
            </div>
         );
    }
}
 
export default AboutMe;