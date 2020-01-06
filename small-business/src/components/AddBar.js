import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    TextField,
} from '@material-ui/core'
import { addBar } from '../redux/actions'

class Add extends Component {
  state = {
    name: '',
    address: '',
    hours: '',
    description: '',
  }

  handleTextChange = (e) => {
    e.preventDefault()
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const bar = { ...this.state }
    bar.id = this.props.barTotal + 1
    this.props.addBar(bar)
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <form 
            onSubmit={this.handleSubmit}
            style={{ display: 'flex', flexDirection: 'column',
            width: '250px', width: '450px',  margin: '5% 30% 0' }}>
          <TextField 
              id="name" 
              placeholder="Name" 
              value={this.state.name} 
              onChange={this.handleTextChange} 
              required />
          <TextField 
              id="address" 
              placeholder="Address" 
              value={this.state.address} 
              onChange={this.handleTextChange}
              required />
          <TextField 
              id="hours" 
              placeholder="Hours (ex. 8AM - 9PM)" 
              value={this.state.hours} 
              onChange={this.handleTextChange} 
              required />
          <TextField 
              id="description" 
              placeholder="Description" 
              value={this.state.description} 
              onChange={this.handleTextChange} 
              required />
          <br />
          <Button 
              variant="contained"
              color="primary"
              type="submit">
              Add Bar</Button>
        </form>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
    return {
        addBar: (bar) => dispatch(addBar(bar))
    }
}

export default connect(null, mapDispatchToProps)(Add)

