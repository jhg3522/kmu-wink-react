import './App.css';
import React, { Component } from 'react';
import Btn from './components/Btn.js'
import Header from "./components/Header";
import Contentarea from "./components/Contentarea";
import Banner from "./components/Banner";
import Star from "./components/Star";
import ImageBox from "./components/ImageBox";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header name="리뷰 남기기" />
            <Banner text1="소융대 비빔면+삼겹살" text2="B-1">
                <text className="B-text1" />
                <text className="B-text2" />
            </Banner>
            <div className="Content-wrap">
                <Star/>
                <Contentarea id="content"
                           placeholder="솔직한 리뷰를 작성해주세요!"/>
                <ImageBox/>
                <Btn
                  name="댓글 작성"
                />
            </div>
        </div>
    );
  }
}

export default App;
