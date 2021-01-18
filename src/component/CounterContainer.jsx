import { connect } from "react-redux";

const CounterContainer = ({ dispatch }) => {
  const inputs = [
    { action: "ADD", value: "+1" },
    { action: "REMOVE", value: "-1" },
    { action: "MEGAADD", value: "+10" },
    { action: "MEGAREMOVE", value: "-10" },
    { action: "RESET", value: "reset" },
  ];

  return (
    <div>
      {inputs.map((input, index) => {
        return (
          <input
            type="button"
            value={input.value}
            onClick={() => dispatch({ type: input.action })}
            key={index}
          />
        );
      })}
    </div>
  );
};

const mapStateToPros = (state) => ({ count: state });

export default connect(mapStateToPros)(CounterContainer);
