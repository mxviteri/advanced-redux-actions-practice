import { connect } from "react-redux";
import ChangeTemperature from "../components/ChangeTemperature";
import { setTemp } from "../actions";


const mapDispatchToProps = (dispatch) => {
  return {
    set: (temp) => dispatch(setTemp(temp))
  };
};

export default connect(mapDispatchToProps, null)(ChangeTemperature);