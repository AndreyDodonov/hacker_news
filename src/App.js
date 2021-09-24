import React from 'react';
import './App.css';
import Header from './modules/Header/Header';
import NavBar from './modules/NavBar/NavBar';
import ContentBlock from './modules/ContentBlock/ContentBlock';


class App extends React.Component  {

  getTopNews  = async () => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
    }
  }

  getNews  = async () => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
    }
  }  
 
  render () {
    return (
      <div>
        <Header/>
        <NavBar
         getNews = {this.getNews}
         gettopNews = {this.getTopNews}
        />
        <ContentBlock
         
        />
      </div>
    );
  }
  
}

export default App;
