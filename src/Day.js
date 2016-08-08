import React from 'react';
import './App.css';


var Day = React.createClass({

  getInitialState: function(){
    return {
      temp:this.props.data[0].temp.day,
    }
  },

  render: function(){
    console.log(this.state.temp);
      return (
          <div>
            <h2>Test</h2>
          </div>
      );
  }
});

export default Day;
