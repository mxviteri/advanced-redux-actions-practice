import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';
import ScaleVideo from '../components/ScaleVideo';

function mapStateToProps(state){
    return {
      URL: state.videoURL,
      scale: state.videoScale
    }
  }
  
export default connect(mapStateToProps, null)(VideoPlayer, ScaleVideo);
