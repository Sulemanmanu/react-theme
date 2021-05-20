import React from "react"
import { connect } from "react-redux"

import { increaseCounter, decreaseCounter, } from "./actions/counter"



class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

  }

  
  render() {
    return (
      <div>
        <div>Count: {this.props.count}</div>

        <button onClick={() => this.props.increaseCounter()}>Increase Count</button>

        <button onClick={() => this.props.decreaseCounter()}>Decrease Count</button>

      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)