import { connect } from 'react-redux';
import Users from '../components/Users'

function mapStateToProps(state){
    return {
      users: state.users,
      firstNameFilter: state.searchText,
      sortOn: state.currentUserSort
    }
  }



  export default connect(mapStateToProps, null)(Users);