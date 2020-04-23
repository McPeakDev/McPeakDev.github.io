import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'


class NewsDemo extends React.PureComponent
{
  constructor(props)
  {
    super(props);
    this.state = {stories: []};
  }

  async componentWillMount()
  {
    let data = await window.fetch("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=ZzdkUqtGJNHp1C7c4HOUU0taMGQHjeVN", 
      {
          method: "GET",

      }
    ).then(res => res.json());

    this.setState({stories: data["results"]})
  }

  render()
  {
      return(
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2>This demonstrates the use of an API and dynamic mapping. This displays the top news stories from the New York Times for the current day.</h2>
            <br/>
            <Button href="https://github.com/McPeakDev/McPeakDev.github.io/blob/development/src/Components/NewsDemo.js" variant="primary">See Code</Button>
            <br/>
            <br/>

            <CardColumns>
              {this.state.stories.map(story =>
                {
                  return(
                    <div>
                      <Card className="bg-secondary">
                        <Card.Img variant="top" src={story["multimedia"][0]["url"]} />
                        <Card.Body>
                          <Card.Title>{story["title"]}</Card.Title>
                          <Card.Text>{story["abstract"]}</Card.Text>
                          <Button href={story["url"]} variant="dark">See Article</Button>
                        </Card.Body>
                      </Card>
                      <br/>
                    </div>
                  );
                }
              )}
            </CardColumns>
          </div>
        </div>
      );
  }
}

export default NewsDemo;