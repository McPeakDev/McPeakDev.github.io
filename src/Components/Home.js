import React from 'react';

class Home extends React.PureComponent
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
            Home
        </div>
      );
  }
}

export default Home;