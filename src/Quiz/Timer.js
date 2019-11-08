import React, { Component } from 'react';


class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          count: 0
      }
    }
    render () {
        const {count} = this.state
        return (
            <div>
                <p> Time: {count} </p>
            </div>
        )
    }
    // setInterval in our ComponentDidMount
    componentDidMount () {
        this.myInterval = setInterval(() => {
            this.setState(preState => ({
            count: preState.count +1 
            }))
        }, 1000);
    }
    componentWillUnmount () {
           clearInterval(this.myInterval)
    }
}
export default Timer;
