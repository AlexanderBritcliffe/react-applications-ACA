  
import { connect } from 'react-redux'
import Login from '../components/Login'
import { withRouter } from "react-router-dom";


const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  };
};


export default withRouter(connect(mapStateToProps, null)(Login));