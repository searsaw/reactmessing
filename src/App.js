import React from 'react';
import './App.css';
import $ from 'jquery';
import Day from './Day';

var Main = React.createClass({

  getInitialState: function(){
    return {
      data: [],
    }
  },

  componentWillMount: function() {
    $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.props.location}&mode=json&units=imperial&cnt=7&APPID=7cf16558d759d14815306832bd7341e2`, (result) => {
      this.setState({
        data: result.list,
      });
    });
  },

  render: function(){
    return (
        <Day data={this.state.data} />
    );
  }
});

export default Main;
