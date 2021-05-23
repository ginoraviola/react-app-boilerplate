import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {triggerGetSalutation} from "../../actions/baseAction";

interface ISampleComponentProps {
  salutation: string;
  triggerGetSalutation: Function;
}

class SampleComponent extends Component<ISampleComponentProps> {
  public static propTypes = {};

  componentDidMount() {
    this.props.triggerGetSalutation();
  }

  render() {
    return (
        <div className="m-5">
          <p className="text-3xl text-gray-600 text-center">{this.props.salutation}</p>
        </div>
    );
  }
}

SampleComponent.propTypes = {
  triggerGetSalutation: PropTypes.func.isRequired,
  salutation: PropTypes.string,
}

const mapStateToProps = (state: any) => ({
  salutation: state.baseReducer.salutation,
});

export default connect(mapStateToProps, {triggerGetSalutation})(SampleComponent);
