import React, { Component } from 'react';
import './App.css';
import Menu from './components/shared/menu';
import HomeComponent from './components/home';
import CoursesComponent from './components/courses';

class App extends Component {
  render() {
    return (
      // <HomeComponent />
      <CoursesComponent />

    );
  }
}

export default App;
