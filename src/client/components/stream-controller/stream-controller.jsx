import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import actions from "../../core/actions/action-creators";
import App from "../app";

const StreamController = ({streamActive, toggleStream}) => {
  return(
    <button onClick={toggleStream}>{streamActive ? 'Stop' : 'Start'} Stream</button>
  );
};

StreamController.propTypes = {
  streamActive: PropTypes.bool.isRequired,
  toggleStream: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    streamActive: state.streamActive
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleStream: (value) => {dispatch(actions.toggleStream(value))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamController);
  