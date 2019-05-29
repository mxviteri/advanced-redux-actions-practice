import { connect } from "react-redux";
import CounterButton from '../components/CounterButton'
import { increaseCounter, decreaseCounter } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
      increase: () => dispatch(increaseCounter()),
      decrease: () => dispatch(decreaseCounter())
    };
  };
  
  export default connect(mapDispatchToProps, null)(CounterButton);