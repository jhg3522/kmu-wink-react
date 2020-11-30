import './App.css';
import React, { Component } from 'react';
import Btn from './components/Btn.js'
import Textarea from './components/Textarea.js'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Textarea
              placeholder="제목"/>
          <Textarea
              placeholder="아아아아아아악"/>
          <Btn
              name="클릭해보시던가"
          />
          <Btn
              name="취소"
          />
        </div>
    );
  }
}

export default App;
