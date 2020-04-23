import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Fade from 'react-bootstrap/Fade'
import Resume from './Resume'
import Home from './Home'
import Projects from './Projects'


class LandingPage extends React.PureComponent
{
  constructor(props)
  {
    super(props);
    this.state = {linkState: "Home", pageShown: true};
  }

  handleClick(event, linkName)
  {
    event.preventDefault();
    this.setState({nextLink: linkName, pageShown: false});
  }

  render()
  {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Nav.Link className="text-white" onClick={(e) => this.handleClick(e, "Home")}>McPeakDev</Nav.Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={(e) => this.handleClick(e, "Home")}>Home</Nav.Link>
            <Nav.Link onClick={(e) => this.handleClick(e, "Resume")}>Resume</Nav.Link>
            <Nav.Link onClick={(e) => this.handleClick(e, "Projects")}>Projects</Nav.Link>
          </Nav>
        </Navbar>
        <Fade onExited={() => {this.setState({linkState: this.state.nextLink, pageShown: true});}} in={this.state.pageShown}>
          <div id="body">
            {this.state.linkState === "Home" &&
              <Home />
            }
            {this.state.linkState === "Resume" &&
              <Resume/>
            }
            {this.state.linkState === "Projects" &&
              <Projects />
            }
          </div>
        </Fade>
      </div>
    );
  }
}

export default LandingPage;
