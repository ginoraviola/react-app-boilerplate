import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {triggerGetSalutation} from "../../actions/baseAction";

interface ISampleComponentProps {
  salutation: string;
  triggerGetSalutation: Function;
}

class SampleComponent extends Component<ISampleComponentProps> {

  componentDidMount() {
    this.props.triggerGetSalutation();
  }

  render() {
    return (
        <div>
          <h1>{this.props.salutation}</h1>
        </div>
    );
  }
}

// @ts-ignore
SampleComponent.propTypes = {
  triggerGetSalutation: PropTypes.func.isRequired,
  salutation: PropTypes.string,
}

const mapStateToProps = (state: any) => ({
  salutation: state.baseReducer.salutation,
});

export default connect(mapStateToProps, {triggerGetSalutation})(SampleComponent);
