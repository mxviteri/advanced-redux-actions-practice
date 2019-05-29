import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import SpecialTextBox from "../components/SpecialTextBox";

const mapDispatchToProps = (dispatch) => {
  return {
    set: (txt) => dispatch(setSpecialText(txt))
  }
}

export default connect(mapDispatchToProps, null)(SpecialTextBox);
