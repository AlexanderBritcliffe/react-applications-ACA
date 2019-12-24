import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
} from '@material-ui/core'

class Add extends Component {
  state = {
    name: '',
    address: ''
  }

  handleTextChange = (e) => {
    e.preventDefault()
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const listing = { ...this.state }
    listing.id = this.props.listingTotal + 1
    this.props.addListing(listing)
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <form 
            onSubmit={this.handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
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
          <br />
          <Button variant="contained" color="primary" type="submit">Add Listing</Button>
        </form>
      </div>
    )
  }
}

export default Add