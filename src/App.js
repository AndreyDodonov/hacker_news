import React from 'react';
import {Link} from 'react-router';
import './App.css';
import Header from './modules/Header/Header';
import NavBar from './modules/NavBar/NavBar';
import ContentBlock from './modules/ContentBlock/ContentBlock';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

class App extends React.Component  {

  

  getTopNews  = async () => {
    const response = await fetch(`${BASE_URL}/topstories.json`);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
    }
  }

  getNews  = async () => {
    const response = await fetch(`${BASE_URL}/newstories.json`);
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
