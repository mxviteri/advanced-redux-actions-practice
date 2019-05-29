import { connect } from "react-redux";
import CityDropDown from '../components/CityDropDown';
import { setCurrentCity } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
      set: (city) => dispatch(setCurrentCity(city))
    };
  };
  
  export default connect(mapDispatchToProps, null)(CityDropDown);
  