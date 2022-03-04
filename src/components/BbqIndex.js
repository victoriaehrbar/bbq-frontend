import React from "react";
import { connect } from "react-redux";
import { getBbqs } from "../redux/actions/bbqActions";
import BbqListItem from "./BbqListItem";

class BbqIndex extends React.Component {
  componentDidMount() {
    this.props.getBbqs();
  }
  render() {
    return (
      <div>
        <h1>BBQs</h1>
        {this.props.bbqs.map((bbq) => (
          <BbqListItem bbq={bbq} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ bbqs }) => {
  return {
    bbqs: bbqs.all,
  };
};

export default connect(mapStateToProps, { getBbqs })(BbqIndex);
