import { connect } from 'react-redux';
import Thermostat from '../components/Thermostat';

function mapStateToProps(state){
    return {
      temp: state.currentTemp
    }
  }
  
    export default connect(mapStateToProps, null)(Thermostat);