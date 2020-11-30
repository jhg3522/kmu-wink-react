import './App.css';
import React, { Component } from 'react';
import Btn from './components/Btn.js'
import Titlearea from './components/Titlearea.js'
import Header from "./components/Header";
import Contentarea from "./components/Contentarea";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header name="리뷰 남기기" />
            <Titlearea id="title"
                       placeholder="제목"/>
            <Contentarea id="content"
                       placeholder="내용"/>
            <Btn
              name="댓글 작성"
            />
        </div>
    );
  }
}

export default App;
