import React from 'react';

class Projects extends React.PureComponent
{
  constructor(props)
  {
    super(props);
    this.state = {linkState: "Home"};
  }

  render()
  {
      return(
        <div>
            Projects
        </div>
      );
  }
}

export default Projects;