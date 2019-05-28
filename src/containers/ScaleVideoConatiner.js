import { connect } from "react-redux";
import ScaleVideo from '../components/ScaleVideo'
import { setVideoScale } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
      set: (scale) => dispatch(setVideoScale(scale))
    };
  };
  
  export default connect(mapDispatchToProps, null)(ScaleVideo);