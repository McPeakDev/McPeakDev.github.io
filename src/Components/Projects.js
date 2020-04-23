import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Projects extends React.PureComponent
{
  constructor(props)
  {
    super(props);
    this.state = {repos: []};
  }

  async componentWillMount()
  {
    let data = await window.fetch("https://api.github.com/users/McPeakDev/repos", 
      {
          method: "GET",
          'Access-Control-Allow-Origin': "*"
      }
    ).then(res => res.json());

    this.setState({repos: data})
  }

  render()
  {
      return(
          <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="text-center">This demonstrates the use of an API and dynamic mapping.</h2>
            <h2 className="text-center">This displays all of my public repos from Github using React.</h2>
            <br/>
            <Button href="https://github.com/McPeakDev/McPeakDev.github.io/blob/development/src/Components/Projects.js" variant="primary">See Code</Button>
            <br/>
            <br/>
              {this.state.repos.map(repo =>
                {
                  return(
                    <div>
                      <Card className="bg-secondary">
                        <Card.Body>
                          <Card.Title>{repo["name"]}</Card.Title>
                          <Card.Text>{repo["description"]}</Card.Text>
                          <Button href={repo["html_url"]} variant="dark">See Repository</Button>
                        </Card.Body>
                      </Card>
                      <br/>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      );
  }
}

export default Projects;