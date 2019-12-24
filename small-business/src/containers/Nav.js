  
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import { withRouter } from "react-router-dom";


const mapStateToProps = state => ({
    user: state.user
  });

export default withRouter(connect(mapStateToProps, null)(Nav));