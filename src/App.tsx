import * as React from 'react';
import './App.css';
import ColorTable from './Components/ColorTable/color-table';

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">
            <ColorTable />
          </div>
        </div>
      </div>
    );
  }
}

export default App;