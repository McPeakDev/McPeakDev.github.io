import React from 'react';

class Resume extends React.PureComponent
{
  render()
  {
      return(
        <div className="row">
            <div className="col-md-8 mx-auto">
                <div id="header" className="text-center">
                    <h3>Matthew L. McPeak</h3>
                    <h4>128 Manchester Place | Kingsport, TN 37663</h4>
                    <h4>(423) 791-8627 | <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://github.com/McPeakDev/"><u>GitHub</u></a> | <a className="text-white" href="mailto:m.mcpeakcs@gmail.com"><u>m.mcpeakcs@gmail.com</u></a></h4>
                    <br/>
                    <div className="border-top"></div>
                </div>
                <div id="summary" className="text-left">
                    <h5>Summary Of Qualifications</h5>
                    <br/>
                    <h5>Detail-oriented and motivated Software Developer, that enjoys interacting with people. A highly efficient programmer, problem solver, and team player. Great troubleshooter finding the root of problems. Enjoys helping people and achieving client satisfaction.</h5>
                    <br/>
                </div>
                <div id="education" className="text-left">
                    <h5>Education</h5>
                    <div className="border-top"></div>
                    <br/>
                    <h5>East Tennessee State University, Johnson City, TN</h5>
                    <h5><b>Bachelor of Computer Science: Information Technology</b></h5>
                    <h5><b>Accreditation: Computing Accreditation Commission (CAC) of ABET</b></h5>
                    <h5><b>Major GPA: 3.46, Graduated May 2020</b></h5>
                    <h5>Key Courses: Advanced Web Development, Software Engineering II, Senior Project</h5>
                    <h5>Honors: Academic Performance Scholarship (APS), TN Hope Scholarship</h5>
                    <br/>
                    <h5>Northeast State Community College, Blountville, TN</h5>
                    <h5><b>Associate of Applied Science: Computer Science</b></h5>
                    <h5><b>Accreditation: Association of Technology, Management, and Applied Engineering (ATMAE)</b></h5>
                    <h5><b>Major GPA: 4.0, Graduated May 2018</b></h5>
                    <h5>Honors: Summa Cum Laude, TN Hope Scholarship Recipient, ACM Chapter Treasurer</h5>
                    <br/>
                </div>
                <div id="projects" className="text-left">
                    <h5>Project Experience</h5>
                    <div className="border-top"></div>
                    <br/>
                    <h5><b>Bike Shop Analytics, Lead Developer / Git Manager</b></h5>
                    <h5><b>Software Engineering II (2020)</b></h5>
                    <ul>
                        <li><h5>Incorporated the Agile methodology using Scrum.</h5></li>
                        <li><h5>Developed fully functioning web microservices</h5></li>
                        <li><h5>Developed in React.JS and .NET Core</h5></li>
                        <li><h5>Created a DevOps Pipeline using Jenkins</h5></li>
                        <li><h5>Created a RESTful API for microservices and SQL database communication.</h5></li>
                    </ul>
                    <br/>
                </div>
                <div id="work-experience" className="text-left">
                    <h5>Work Experience</h5>
                    <div className="border-top"></div>
                    <br/>
                    <h5><b>Staff (APS Student Worker), 05/2018 to 05/2020</b></h5>
                    <h5><b>College of Nursing I.T. at ETSU – Johnson City, TN</b></h5>
                    <ul>
                        <li><h5>Supported staff in the ETSU College of Nursing with PC and Mac requests.</h5></li>
                        <li><h5>Fixed printers when printers are unable to print.</h5></li>
                        <li><h5>Stocked printer in Mail Room.</h5></li>
                        <li><h5>Installed PCs and its peripherals where needed.</h5></li>
                    </ul>
                    <br/>
                    <h5><b>IT Intern, 05/2018 to 05/2020</b></h5>
                    <h5><b>Good Samaritan Ministries – Johnson City, TN</b></h5>
                    <ul>
                        <li><h5>Rolled out a new backup solution to essential computers.</h5></li>
                        <li><h5>Developed custom software for use within the organization.</h5></li>
                        <li><h5>Troubleshoots computers and printers.</h5></li>
                        <li><h5>Implemented a password keeping solution.</h5></li>
                    </ul>
                    <br/>
                </div>
                <div id="activities-memberships" className="text-left">
                    <h5>Activities And Memberships</h5>
                    <div className="border-top"></div>
                    <br/>
                    <ul>
                        <li><h5>Warrior’s Path State Park (Disc Golf, Fishing), Kingsport, TN</h5></li>
                        <li><h5>Association for Computing Machinery</h5></li>
                    </ul>
                </div>
            </div>
        </div>
      );
  }
}

export default Resume;