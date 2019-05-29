import { connect } from "react-redux";
import SearchTextBox from '../components/SearchTextBox'
import { setSearchText } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
      set: (txt) => dispatch(setSearchText(txt))
    };
  };
  
  export default connect(mapDispatchToProps, null)(SearchTextBox);