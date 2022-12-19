import React from 'react';
import "./Counter.css"

class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0,
    }
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(previousValue => ({
               count: previousValue.count + 1,
    }));
  }

  decrement() {
    this.setState(previousValue => ({
          count: previousValue.count - 1,
    }));
  }

  render() {
    return (
      
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button  className='button1'onClick={this.decrement}>-</button>
        <button className='button2' onClick={this.increment}>+</button>
      </div>
    
    );
  }
  
}


export default Counter;