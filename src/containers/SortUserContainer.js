import { connect } from "react-redux";
import SortUsers from '../components/SortUsers'
import { setCurrentUserSort } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
      set: (sort) => dispatch(setCurrentUserSort(sort))
    };
  };
  
  export default connect(mapDispatchToProps, null)(SortUsers);