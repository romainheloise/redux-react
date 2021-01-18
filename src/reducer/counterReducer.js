const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;

    case "REMOVE":
      return state - 1;

    case "MEGAADD":
      return state + 10;

    case "MEGAREMOVE":
      return state - 10;

    case "RESET":
      return 0;

    default:
      return 0;
  }
};

export default counterReducer;
