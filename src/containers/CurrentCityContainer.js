import { connect } from 'react-redux';
import  CurrentCity from '../components/CurrentCity'

function mapStateToProps(state){
  return {
    text: state.currentCity
  }
}

  export default connect(mapStateToProps, null)(CurrentCity);