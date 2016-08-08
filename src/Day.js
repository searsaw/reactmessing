import React from 'react';
import './App.css';


var Day = React.createClass({

  getInitialState: function(){
    return {
      max:0,
      min:0,
    }
  },

  render: function(){
    console.log(this.props);
      return (
          <div>
          <h1>Fuck</h1>
          {this.props.data.temp.max}
          </div>
      );
  }
});

export default Day;
