import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Section from './components/Section'

class App extends Component {

  createSection(sectionProps) {
    return <Section {...sectionProps} key={sectionProps.id} />; 
  }

  mapSections(sections) {
    return sections.map(this.createSection);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{data.name}</h1>
        </header>
        <p className="App-intro">
          {data.intro}
        </p>
        {this.mapSections(data.sections)}
      </div>
    );
  }
}

export default App;
