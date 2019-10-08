// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
  }

  changeMood = () => {
    let newMood = this.state.mood === 'happy' ? 'sad' : 'happy'

    this.setState({
      mood: newMood
    })
  }

  render() {
    return (
      <div onClick={this.changeMood}>{this.state.mood}</div>
    )
  }

}
