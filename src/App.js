import React, { Component } from 'react';
import CacheBuster from './CacheBuster';
import './App.css';

class App extends Component {
  componentDidMount() {
    if(!localStorage.hasOwnProperty("Log Minute")){
      localStorage.setItem("Log Minute", new Date().getMinutes())
    }
  }

  render() {
    return (
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            refreshCacheAndReload();
          }

          return (
            <div className="App">
              <header className="App-header">
                <h1>Cache and Local Storage Busting - Example 1</h1>
                <p>
                  Bundle version - <code>v{global.appVersion}</code>
                </p>

                <p>ochomoswill has taken over.</p>
              </header>
            </div>
          );
        }}
      </CacheBuster>
    );
  }
}

export default App;
