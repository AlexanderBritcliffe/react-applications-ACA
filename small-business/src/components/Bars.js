import React from 'react'
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteBar } from '../redux/actions'

const Bars = (props) => {
  return (
    <Container style={{backgroundColor: "green", borderRadius: '25px'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize:"2em", fontFamily: "comic-sans"}}>Id</TableCell>
            <TableCell style={{fontSize:"2em", fontFamily: "comic-sans"}}>Name</TableCell>
            <TableCell style={{fontSize:"2em", fontFamily: "comic-sans"}}>Address</TableCell>
            <TableCell style={{fontSize:"2em", fontFamily: "comic-sans"}}>Hours</TableCell>
            <TableCell style={{fontSize:"2em", fontFamily: "comic-sans"}}>Description</TableCell>
            {document.cookie == "loggedIn=true" ? (
              <TableCell>Delete</TableCell>
            ):(null)}
          </TableRow>
        </TableHead>
        <TableBody>
        {props.bars.map((bar, index) => (
          <TableRow key={bar.id}>
            <TableCell style={{fontSize:"2em", fontFamily: "comic-sans"}} component="th" scope="row">
              {bar.id}
            </TableCell>
            <TableCell style={{fontSize:"1em", fontFamily: "comic-sans"}}><Link to={`/bar/${bar.id}`}>{bar["name"]}</Link></TableCell>
            <TableCell style={{fontSize:"1em", fontFamily: "comic-sans"}}>{bar["address"]}</TableCell>
            <TableCell style={{fontSize:"1em", fontFamily: "comic-sans"}}>{bar["hours"]}</TableCell>
            <TableCell style={{fontSize:"1em", fontFamily: "comic-sans"}}>{bar["description"]}</TableCell>
            {document.cookie == "loggedIn=true" ? (
              <TableCell style={{fontSize:"1em", fontFamily: "comic-sans"}}>
                <DeleteIcon
                  onClick={() => props.deleteBar(index)}
                  className="icon text-red" />
              </TableCell>
            ):(null)}
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </Container>
  )
}



const mapStateToProps = (state) => {
  return {
    bars: state.bars
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBar: index => dispatch(deleteBar(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bars);

