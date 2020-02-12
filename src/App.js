import React, {Component} from 'react';

class count extends Component {
  constructor () {
    super();
    this.state = {
      count: 0,
      double: false,
    }
  }


increment = () => {
  if(this.state.count < 20) {
    this.setState({
      count: this.state.count + 1
    })
  }
  if(this.state.double){
    if(this.state.count < 19){
      this.setState({
        count: this.state.count + 2
      })
    }
  }
};

decrement = () => {
  if(this.state.count > 0) {
    this.setState({
      count: this.state.count -1,
    })
  }
  if(this.state.double) {
    if(this.state.count > 1) {
      this.setState({
        count: this.state.count -2
      })
    }
  }
}

clear = () => {
  this.setState({
    count: 0,
  })
}

double = () => {
  if(this.state.double) {
    this.setState({
      double: false,
    })
  } else {
    this.setState({
      double: true
    })
  }
}


  render() {
    
    return(
      <div className="container">
        <div className="navbar">count.js</div>
        <div className="count">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.clear}>Clear Count</button>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button" onClick={this.decrement}>Decrement</button>
          
        </div>
      </div>
    )
  }
}

export default count;
