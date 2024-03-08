import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  timesCLick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            The Button has been clicked
            <br /> <span className="num">{count}</span> times
          </h1>
          <p className="desc">Click the button to increase the count!</p>
          <button type="button" className="button" onClick={this.timesCLick}>
            CLick Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
