import { connect } from "react-redux";
import UserButtons from '../components/UserButtons';
import { addUser, removeUser } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        add: (user) => dispatch(addUser(user)),
        remove: () => dispatch(removeUser())
    }
  }
  
  export default connect(mapDispatchToProps, null)(UserButtons);
  