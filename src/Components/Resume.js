import React from 'react';

class Resume extends React.PureComponent
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
            Resume
        </div>
      );
  }
}

export default Resume;