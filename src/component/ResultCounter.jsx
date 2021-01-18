import { connect } from "react-redux";

const ResultCounter = ({ count }) => {
  return <p>{count}</p>;
};

const mapStateToPros = (state) => ({ count: state });

export default connect(mapStateToPros)(ResultCounter);
