import React, { Component } from 'react';
import { render } from 'react-dom';
import Cards from './Cards';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="container">
        <p>Neumorphism</p>
        <span className="label">Hamberger button</span>
        <div className="m_button">
          <span></span>
          <span></span>
          <span></span>
        </div>


        <span className="label">progress bar</span>
        <div className="time">
          <div className="bar"></div>
        </div>
    
        <span className="label">Avatar cover</span>
        <div className="cover">
          <img src="https://p2.music.126.net/rNQH185Dp2lcG2yII_Aiwg==/18159534045164927.jpg" alt="Sober Up" />
        </div>


        <span className="label">Button</span>
        <button id="btntransactions" class="t4 w-100">Ranganath</button>

        <span className="label">Avatar cover</span>
        <div className="inner-container">
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1492596277896-fe714329e1e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=807&q=80" width="100%"/>
          </div>
        </div>

        <span className="label">Cards</span>
        <Cards />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
