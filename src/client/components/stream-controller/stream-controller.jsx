import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import actions from "../../core/actions/action-creators";
import websocket from "../../core/services/data.service";

const StreamController = ({streamActive, toggleStream}) => {

  useEffect(() => {
    if (websocket.readyState === 1) {
      streamActive ? websocket.send('{"op":"unconfirmed_sub"}') : websocket.send('{"op":"unconfirmed_unsub"}');
    }
  });

  return(
    <button className="stream-controller" onClick={toggleStream}>{streamActive ? 'Stop' : 'Start'} Stream</button>
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
  