import Status from './component/Status'
import React from 'react'

function App() {
  return (
    <div className="App m-4">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">eCRNow Port Status</a>
        <ul className="navbar-nav mr-auto">
          <button id="element" content="Button">button</button>
        </ul>
      </nav> */}
      <h1>eCRNow Dashboard</h1>
      <div className="jumbotron">
        <Status />
      </div>
    </div>
  );
}

export default App;
