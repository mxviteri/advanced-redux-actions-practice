import { connect } from "react-redux";
import { setIsLoading } from "../actions";
import Modal from '../components/Modal'

const mapStateToProps = (state) =>{
    return {
      isLoading: state.isLoading
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      setIsLoading: (isLoading) => dispatch(setIsLoading(isLoading))
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(Modal);