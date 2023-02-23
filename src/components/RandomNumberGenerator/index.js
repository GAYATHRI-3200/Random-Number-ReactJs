// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumber extends Component {
  state = {randomNumber: 0}

  onRandom = () => {
    const randomNumbers = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: randomNumbers})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="caption">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onRandom} className="btn">
            Generate
          </button>
          <p className="count">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumber
