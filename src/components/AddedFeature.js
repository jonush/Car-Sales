import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from '../actions/action';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button is-primary is-outlined"
        onClick={() => props.removeFeature(props.feature)}
      >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.features
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
