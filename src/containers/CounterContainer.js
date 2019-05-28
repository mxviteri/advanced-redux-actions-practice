import { connect } from 'react-redux';
import Counter from '../components/Counter';

function mapStateToProps(state){
  return {
    count: state.currentCount
  }
}

  
export default connect(mapDispatchToProps, null)(Counter);