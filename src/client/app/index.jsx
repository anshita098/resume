import React from 'react';
import { render } from 'react-dom';
import Mypro from './Awesome.jsx';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Mypro />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));