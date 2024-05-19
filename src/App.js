import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';


export default class App extends Component {
 
  render() {
    return (
     <>
      <Router>
      <NavBar/>
      <Routes>
         <Route exact path='/'element={ < News key='gn' pageSize={5} country='in' category='general' />} /> 
         <Route exact path='/business' element={ < News key='bs' pageSize={5} country='in' category='business'/>} />
         <Route exact path='/entertainment' element={< News key='en' pageSize={5} country='in' category='entertainment'/>}/>
         <Route exact path='/sports' element={< News pageSize={5} key='st' country='in' category='sports'/>}/>
         <Route exact path='/health' element={< News pageSize={5} key='hl' country='in' category='health'/>}/>
         <Route exact path='/science'element={< News pageSize={5} key='sc' country='in' category='science'/>}/>  
         <Route exact path='/technology' element= {<News pageSize={5} country='in' key='te' category='technology'/>}/>  
      </Routes>
      </Router>
      </>
    )
  }
}

