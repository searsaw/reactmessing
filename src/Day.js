import React from 'react';
import './App.css';


var Day = React.createClass({

  getInitialState: function(){
    return {
      temp:0,
    }
  },


  render: function(){
      console.log(this.props);
      return (
          <div>
            <h2>{this.props.data[0].temp.max}</h2>
          </div>
      );
  }
});

export default Day;
